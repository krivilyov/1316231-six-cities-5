import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OffersList from "../../offers-list/offers-list";
import {offerPropType} from "../../../prop-types";
import {OfferCardTypes, AuthorizationStatus, AppRoute} from "../../../const";
import Map from "../../map/map";
import Tabs from "../../tabs/tabs";
import {connect} from "react-redux";
import {setSortingTypeAction, changeCityAction, onMouseOverOffer} from "../../../store/action";
import OffersSorting from "../../offers-sorting/offers-sorting";
import {getCurrentCityOffers} from "../../../store/selectors";
import IndexEmptyPage from "../index-empty-page/index-empty-page";
import {formatUpperCaseFirst} from "../../../utils";
import {Link} from "react-router-dom";

const IndexPage = (props) => {
  const {offers, activeCity, changeCity, onOptionClick, authorizationStatus, userEMail, userAvatar} = props;
  const offersQuantity = offers.length;
  const haveOffers = offers.length > 0;
  const isAuthorizedStatus = authorizationStatus === AuthorizationStatus.AUTH;

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
                  <Link className="header__nav-link header__nav-link--profile"
                    to={isAuthorizedStatus ? AppRoute.FAVORITES : AppRoute.LOGIN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={isAuthorizedStatus ? {backgroundImage: `url(${userAvatar})`} : undefined}
                    >
                    </div>
                    <span className="header__user-name user__name"
                    >{isAuthorizedStatus ? userEMail : `Sign in`}</span>
                  </Link>
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
                  <b className="places__found">{offersQuantity} places to stay in {formatUpperCaseFirst(activeCity)}</b>

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
                      offers={offers}
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
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  userEMail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getCurrentCityOffers(state),
  activeCity: state.COMMON.activeCity,
  userEMail: state.USER.authorizationStatus === AuthorizationStatus.AUTH ? state.USER.authInfo.email : ``,
  userAvatar: state.USER.authorizationStatus === AuthorizationStatus.AUTH ? state.USER.authInfo.avatarUrl : ``,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(changeCityAction(city)),
  onOptionClick: (type) => dispatch(setSortingTypeAction(type)),
  onMouseOverOffer: (offer) => dispatch(onMouseOverOffer(offer))
});

export {IndexPage};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
