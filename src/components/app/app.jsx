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
  const bookMarkOffers = offers.filter((it) => it.isBookMark);

  const getRelatedOffers = (id) => {
    return offers.filter((item) => (item.id !== (id * 1))).slice(0, 3);
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
          <FavoritesPage
            bookMarkOffers={bookMarkOffers}
          />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => (
            <OfferPage
              offer={offers.find((item) => item.id === (match.params.id * 1))}
              relatedOffers={getRelatedOffers(match.params.id)}
              reviews={reviews}
            />
          )}
        />
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
