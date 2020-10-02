import React from 'react';
import IndexPage from "../index-page/index-page";
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersQuantity} = props;

  return (
    <IndexPage offersQuantity={offersQuantity} />
  );
};

App.propTypes = {
  offersQuantity: PropTypes.number.isRequired,
};

export default App;
