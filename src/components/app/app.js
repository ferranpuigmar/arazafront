import { h } from "preact";
import { Router } from "preact-router";
import { Provider } from "react-redux";
import store from "../../store/store";

// Code-splitting is automated for `routes` directory
import Home from "../../routes/home";
import ProductDetail from "../../routes/producDetail";
import { ScreenClassProvider, setConfiguration } from "react-grid-system";
import breakpoints from "../../config/breakpoints.config";
import { getBreakpoints } from "../../utils/breakpoints";
import BaseLayout from "../common/layout/baseLayout/BaseLayout";

setConfiguration({
  breakpoints: getBreakpoints(breakpoints),
});

const App = () => (
  <Provider store={store}>
    <div id="app">
      <ScreenClassProvider>
        <BaseLayout>
          <Router>
            <Home path="/" />
            <ProductDetail path="/:slug/:id" />
          </Router>{" "}
        </BaseLayout>
      </ScreenClassProvider>
    </div>
  </Provider>
);

export default App;
