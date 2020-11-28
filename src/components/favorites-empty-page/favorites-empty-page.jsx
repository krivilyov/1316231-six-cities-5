import React, {Fragment} from "react";

const FavoritesEmptyPage = () => {
  return (
    <Fragment>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
      </div>
    </Fragment>
  );
};

export default FavoritesEmptyPage;
