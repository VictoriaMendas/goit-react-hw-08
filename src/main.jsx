import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.jsx";
// import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
      <App />
    </Provider>
  </React.StrictMode>
);
