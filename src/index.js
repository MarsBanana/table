import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./store/reducers";
import App from "./App";
import { loadState, saveState } from "./localstorage/handleStorage";

const loadedState = loadState();
const store = createStore(reducers, loadedState);
store.subscribe(() => {
    saveState(store.getState());
});
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
