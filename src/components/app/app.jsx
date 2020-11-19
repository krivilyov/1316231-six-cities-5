import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Router, Switch, Route} from 'react-router-dom';
import {offerPropType, reviewPropType} from "../../prop-types";
import IndexPage from "../pages/index-page/index-page";
import LoginPage from "../pages/login-page/login-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import OfferPage from "../pages/offer-page/offer-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import {AppRoute} from "../../const";
import PrivateRoute from "./../private-route/private-route";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {offers} = props;
  const bookMarkOffers = offers.filter((it) => it.isBookMark);

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.INDEX}>
          <IndexPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesPage
                bookMarkOffers={bookMarkOffers}
              />
            );
          }}
        />
        <Route exact path="/offer/:id"
          render={({match}) => (
            <OfferPage
              offer = {offers.find((item) => item.id === match.params.id)}
              relatedOffers = {[offers[0], offers[1], offers[2]]}
            />
          )}
        />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.COMMON.offers,
  reviews: state.COMMON.reviews,
});

export {App};
export default connect(mapStateToProps)(App);
