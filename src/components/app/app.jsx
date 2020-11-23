import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import IndexPage from "../pages/index-page/index-page";
import LoginPage from "../pages/login-page/login-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import OfferPage from "../pages/offer-page/offer-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import {AppRoute} from "../../const";
import PrivateRoute from "./../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {

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

export default App;
