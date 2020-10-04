import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  OFFERS_QUANTITY: 312
};

ReactDOM.render(<App offersQuantity={Settings.OFFERS_QUANTITY} />, document.querySelector(`#root`));
