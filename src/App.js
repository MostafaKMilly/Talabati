import { ThemeProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "./theme";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Categories from "./components/Categories";
import Layout from "./components/layout/Layout";
import Foods from "./components/FoodsPage";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  selectAllCategories,
} from "./redux/slices/categoriesSlice";
import Loading from "./components/UI/Loading";
import { useEffect } from "react";
import NotFoundPage from "./components/UI/NotFoundPage";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector((state) => state.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const FoodsByCategory = ({ match }) => {
    if (parseInt(match.params.id)) {
      const category = categories.find(
        (category) => category.id === parseInt(match.params.id)
      );
      if (category) return <Foods category={category} />;
      else {
        return <NotFoundPage message="there are no category with this id" />;
      }
    } else {
      return <div></div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CacheProvider value={cacheRtl}>
          <Layout>
            <Switch>
              <Route exact path="/categoris">
                <Categories />
              </Route>
              <Route exact path="/categoris/:id" component={FoodsByCategory} />
              <Redirect to="/categoris" />
            </Switch>
          </Layout>
        </CacheProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
