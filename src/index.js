import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  OFFERS_QUANTITY: 312
};

ReactDOM.render(
    <App
      offersQuantity={Settings.OFFERS_QUANTITY}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
