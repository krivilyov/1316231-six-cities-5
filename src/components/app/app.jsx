import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offerPropType, reviewPropType} from "../../prop-types";

import IndexPage from "../pages/index-page/index-page";
import LoginPage from "../pages/login-page/login-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import OfferPage from "../pages/offer-page/offer-page";
import PageNotFound from "../pages/page-not-found/page-not-found";

const App = (props) => {
  const {offersQuantity, offers, reviews} = props;

  const getOffer = (pathname) => {
    const id = +pathname.replace(`/offer/`, ``);
    return offers.find((item) => item.id === id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage
            offersQuantity={offersQuantity}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage
            render={({history}) => (
              <OfferPage
                offer={getOffer(history.location.pathname)}
                reviews={reviews}
              />
            )}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersQuantity: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default App;
