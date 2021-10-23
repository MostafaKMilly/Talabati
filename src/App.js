import { ThemeProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "./theme";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Layout from "./components/layout/Layout";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CacheProvider value={cacheRtl}>
          <Layout>
            <Switch>
              <Route path="/">
                <Categories />
              </Route>
            </Switch>
          </Layout>
        </CacheProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
