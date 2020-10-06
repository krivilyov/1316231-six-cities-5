import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPage from "../index-page/index-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";

const App = (props) => {
  const {offersQuantity} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage offersQuantity={offersQuantity} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage />
        </Route>
        <Route>
          <div style={{'display': `flex`, 'align-items': `center`, 'justify-content': `center`, 'height': `100vh`, 'width': `100vw`}}>
            <h1>Page not found</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersQuantity: PropTypes.number.isRequired,
};

export default App;
