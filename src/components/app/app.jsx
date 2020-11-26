import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import IndexPage from "../pages/index-page/index-page";
import LoginPage from "../pages/login-page/login-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import OfferPage from "../pages/offer-page/offer-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import {AppRoute, AuthorizationStatus} from "../../const";
import PrivateRoute from "./../private-route/private-route";
import browserHistory from "../../browser-history";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
  const {authorizationStatus} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.INDEX}>
          <IndexPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}
          render={() => authorizationStatus === AuthorizationStatus.NO_AUTH ? <LoginPage /> : <Redirect to="/" />}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesPage />
            );
          }}
        />
        <Route exact path="/offer/:id"
          render={({match}) => (
            <OfferPage
              offerId={match.params.id}
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {App};
export default connect(mapStateToProps, null)(App);
