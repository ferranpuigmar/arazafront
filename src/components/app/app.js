import { h } from "preact";
import { Router } from "preact-router";
import { Provider } from "react-redux";
import store from "../../store/store";

// Code-splitting is automated for `routes` directory
import Home from "../../routes/home";
import Profile from "../../routes/profile";

const App = () => (
  <Provider store={store}>
    <div id="app">
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </div>
  </Provider>
);

export default App;
