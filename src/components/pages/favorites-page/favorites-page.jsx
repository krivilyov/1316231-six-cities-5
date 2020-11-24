import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AppRoute, OfferCardType} from "../../../const";
import Header from "../../header/header";
import {getBookmarkOffersByCity} from "../../../store/selectors";
import OfferCard from "../../offer-card/offer-card";
import FavoritesEmptyPage from "../favorites-empty-page/favorites-empty-page";

const FavoritesPage = (props) => {
  const {bookmarkOffersByCity} = props;
  const isEmpty = bookmarkOffersByCity.size < 1;

  return (
    <div className="page">
      <Header
        appRoute={AppRoute.FAVORITES}
      />

      <main className={`page__main page__main--favorites${isEmpty ? ` page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${isEmpty ? ` favorites--empty` : ``}`}>
            {isEmpty
              ? <FavoritesEmptyPage />
              : <Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {(Array.from(bookmarkOffersByCity.keys())).map((city) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {bookmarkOffersByCity.get(city).map((offer) => (
                          <OfferCard
                            key={offer.id}
                            offer={offer}
                            currentCardType={OfferCardType.FAVORITE}
                            offerBookmarkStatus={offer.isBookmark}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Fragment>
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link footer__logo-link--active" to={AppRoute.INDEX}>
          <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  bookmarkOffersByCity: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = (state) => ({
  bookmarkOffersByCity: getBookmarkOffersByCity(state),
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
