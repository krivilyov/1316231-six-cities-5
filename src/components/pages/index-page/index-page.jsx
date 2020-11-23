import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OffersList from "../../offers-list/offers-list";
import {offerPropType} from "../../../prop-types";
import {OfferCardTypes, AuthorizationStatus, AppRoute} from "../../../const";
import Map from "../../map/map";
import Tabs from "../../tabs/tabs";
import {connect} from "react-redux";
import {setSortingTypeAction, changeCityAction} from "../../../store/action";
import OffersSorting from "../../offers-sorting/offers-sorting";
import {getCurrentCityOffers} from "../../../store/selectors";
import IndexEmptyPage from "../index-empty-page/index-empty-page";
import {formatUpperCaseFirst} from "../../../utils";
import Header from "../../header/header";

const IndexPage = (props) => {
  const {offers, activeCity, changeCity, onOptionClick} = props;
  const offersQuantity = offers.length;
  const haveOffers = offers.length > 0;

  return (
    <div className={`page page--gray page--main ${haveOffers ? `` : `page__main--index-empty`}`}>

      <Header
        appRoute={AppRoute.INDEX}
      />

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
});

export {IndexPage};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
