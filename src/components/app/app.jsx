import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offerPropType, reviewPropType} from "../../prop-types";
import {Cities} from "../../const";


import IndexPage from "../pages/index-page/index-page";
import LoginPage from "../pages/login-page/login-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import OfferPage from "../pages/offer-page/offer-page";
import PageNotFound from "../pages/page-not-found/page-not-found";

const App = (props) => {
  const {offers, reviews} = props;
  const bookMarkOffers = offers.filter((it) => it.isBookMark);
  const activeCity = Cities[0];

  const getRelatedOffers = (id) => {
    return offers.filter((item) => (item.id !== +id)).slice(0, 3);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage
            offers={offers}
            activeCity={activeCity}
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
              offer={offers.find((item) => item.id === +match.params.id)}
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
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export {App};
export default connect(mapStateToProps)(App);
