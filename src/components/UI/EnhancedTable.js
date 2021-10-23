import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import React from "react";
import GlobalFilter from "./GlobalFilter";
import { Box } from "@mui/system";
import CustomCheckBox from "./CustomCheckBox";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FoodsActions from "../FoodsActions";
import { useDispatch, useSelector } from "react-redux";
import { selectFoods } from "../../redux/slices/orderSlice";

function MyTablePagination({
  data,
  pageSize,
  pageIndex,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[8, 10, 25, { label: "All", value: data.length }]}
      colSpan={3}
      count={data.length}
      rowsPerPage={pageSize}
      page={pageIndex}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      component={Box}
      sx={{
        direction: "rtl",
        flexDirection: "row-reverse",
        padding: "30px",
        display: "flex",
        justifyContent: "right",
        "& .MuiTablePagination-toolbar": {
          padding: 2,
          overflow: "auto",
        },
      }}
    />
  );
}

function EnhancedTable({
  columns,
  data,
  setModelIsOpen,
  setEditModelIsOpen,
  setConfirmOrderIsOpen,
}) {
  const dispatch = useDispatch();
  const selectedFoods = useSelector((state) => state.orders.selectedFoods);
  const dealersTable = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 8 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",

          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <CustomCheckBox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <CustomCheckBox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
        {
          id: "actions",

          Header: "Actions",
          Cell: ({ row }) => (
            <div>
              <FoodsActions row={row} setEditModelIsOpen={setEditModelIsOpen} />
            </div>
          ),
        },
      ]);
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    setPageSize,
    selectedFlatRows,
  } = dealersTable;

  const { globalFilter, pageIndex, pageSize } = state;

  if (
    selectedFlatRows.length &&
    selectedFlatRows.length !== selectedFoods.length
  ) {
    console.log(selectedFlatRows);
    dispatch(selectFoods(selectedFlatRows.map((item) => item.original)));
  }
  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };
  return (
    <>
      <Box display="flex" alignItems="flex-end" mb={3.5}>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Button
          variant="contained"
          color="secondary"
          sx={{ color: "#000", ml: 2 }}
          onClick={() => setModelIsOpen(true)}
        >
          أضافة
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            ml: 2,
            display: !selectedFlatRows.length ? "none" : "inline-flex",
          }}
          onClick={() => setConfirmOrderIsOpen(true)}
          startIcon={<LocalGroceryStoreIcon />}
        >
          حساب
        </Button>
      </Box>
      <TableContainer>
        <Table {...getTableProps()} size="medium">
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.id !== "selection" ? (
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? "desc" : "asc"}
                        />
                      ) : null}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} hover>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <MyTablePagination
        {...{
          data,
          pageSize,
          pageIndex,
          handleChangePage,
          handleChangeRowsPerPage,
        }}
      />
    </>
  );
}

export default EnhancedTable;
