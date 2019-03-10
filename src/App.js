import React, { Component } from "react";
import UsernameInput from "./containers/UserSearchBar";
import { Provider } from "react-redux";

import createStore from "./store";

const store = createStore();

store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsernameInput onEnterKeyPressed={username => alert(username)} />
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
