import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OffersList from "../../offers-list/offers-list";
import {offerPropType} from "../../../prop-types";
import {OfferCardTypes, Cities} from "../../../const";
import Map from "../../map/map";
import Tabs from "../../tabs/tabs";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import OffersSorting from "../../offers-sorting/offers-sorting";
import {getSortedOffers} from "../../../store/selectors";
import IndexEmptyPage from "../index-empty-page/index-empty-page";
import {getActiveCityName} from "../../../utils";

const IndexPage = (props) => {
  const {offers, activeCity, changeCity, onOptionClick} = props;
  const offersQuantity = offers.length;
  const haveOffers = offers.length > 0;

  return (
    <div className={`page page--gray page--main ${haveOffers ? `` : `page__main--index-empty`}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs activeCity={activeCity} onTabClick={changeCity} />

        <div className="cities">
          <div className={`cities__places-container container ${haveOffers ? `` : `cities__places-container--empty`}`}>
            {haveOffers ? (
              <Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersQuantity} places to stay in {getActiveCityName(activeCity)}</b>

                  <OffersSorting
                    onOptionClick={onOptionClick}
                  />

                  <div className="cities__places-list places__list tabs__content">
                    <OffersList
                      offers={offers}
                      currentCardType={OfferCardTypes.INDEX}
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      key={activeCity}
                    />
                  </section>
                </div>
              </Fragment>
            ) : <IndexEmptyPage />}
          </div>
        </div>
      </main>
    </div>
  );
};

IndexPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  activeCity: PropTypes.oneOf(Cities).isRequired,
  changeCity: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCityAction(city)),
  onOptionClick: (type) => dispatch(ActionCreator.setSortingTypeAction(type)),
  onMouseOverOffer: (offer) => dispatch(ActionCreator.onMouseOverOffer(offer))
});

export {IndexPage};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
