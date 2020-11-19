import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {offerPropType} from "../../../prop-types";
import {AppRoute, OfferCardTypes} from "../../../const";
import OffersList from "../../offers-list/offers-list";
import Header from "../../header/header";

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  getBookMarkOffersCityMap(bookMarkOffers) {
    return bookMarkOffers.reduce((total, item) => {
      total[item.city] = total[item.city] ? [...(total[item.city]), item] : [item];
      return total;
    }, {});
  }

  getBookmarksLayout(bookMarkOffers) {
    const favoriteList = (Object.keys(this.getBookMarkOffersCityMap(bookMarkOffers))).map((city) => {
      return (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList
              offers={this.getBookMarkOffersCityMap(bookMarkOffers)[city]}
              currentCardType={OfferCardTypes.FAVORITE}
            />
          </div>
        </li>
      );
    });

    return (
      <ul className="favorites__list">{favoriteList}</ul>
    );
  }

  render() {
    const {bookMarkOffers} = this.props;

    return (
      <div className="page">

        <Header
          appRoute={AppRoute.FAVORITES}
        />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {this.getBookmarksLayout(bookMarkOffers)}
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={`/`}>
            <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

FavoritesPage.propTypes = {
  bookMarkOffers: PropTypes.arrayOf(offerPropType).isRequired,
};

export default FavoritesPage;
