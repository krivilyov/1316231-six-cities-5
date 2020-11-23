import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {offerPropType, reviewPropType} from "../../../prop-types";
import {OfferCardTypes, AppRoute} from "../../../const";
import OfferCard from "../../offer-card/offer-card";
import ReviewsList from "../../reviews-list/reviews-list";
import Map from "../../map/map";
import {connect} from "react-redux";
import {getChangedBookmarkOffer, getReviews, getRelatedOffers, getIsAuthorizedStatus} from "../../../store/selectors";
import Header from "../../header/header";
import {fetchIdOffer, fetchRelatedOffers, updateOfferBookmarkStatus, fetchBookmarkOffers, fetchReviews} from "../../../store/api-actions";
import OfferBookmark from "../../offer-bookmark/offer-bookmark";
import {setOverOfferId} from "../../../store/action";

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerId, loadOfferAction, loadRelatedOffersAction, loadReviewsAction} = this.props;
    loadOfferAction(offerId);
    loadRelatedOffersAction(offerId);
    loadReviewsAction(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadOfferAction, loadRelatedOffersAction, loadReviewsAction} = this.props;
    if (prevProps.offerId !== offerId) {
      loadOfferAction(offerId);
      loadRelatedOffersAction(offerId);
      loadReviewsAction(offerId);
    }
  }

  render() {
    const {offer, reviews, offerBookmarkStatus, relatedOffers, onMouseOverOffer, isAuthorizedStatus} = this.props;

    return !offer.id ? (
      <div>Идёт загрузка...</div>
    ) : (
      <div className="page">

        <Header
          appRoute={AppRoute.OFFER}
        />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.img.slice(0, 6).map((picture) => (
                  <div key={picture} className="property__image-wrapper">
                    <img className="property__image" src={picture} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : false}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>

                  <OfferBookmark
                    offerId={offer.id}
                    offerBookmarkStatus={offerBookmarkStatus}
                  />

                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedroomsMax} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.guestsMax}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.option.slice().map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.hostTop ? `property__avatar-wrapper--pro` : false} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description}
                  </div>
                </div>

                <ReviewsList
                  reviews={reviews}
                  offer={offer}
                  isAuthorizedStatus={isAuthorizedStatus}
                />

              </div>
            </div>
            <section className="property__map map">
              <Map
                activeCity={offer.city}
                offers={[offer, ...relatedOffers]}
                currentCardType={OfferCardTypes.RELATED}
                offerId={offer.id}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {relatedOffers.map((item) => (
                  <OfferCard
                    key={item.id}
                    offer={item}
                    currentCardType={OfferCardTypes.RELATED}
                    offerBookmarkStatus={item.isBookmark}
                    onMouseOverOffer={onMouseOverOffer}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offer: getChangedBookmarkOffer(state),
  reviews: getReviews(state),
  relatedOffers: getRelatedOffers(state),
  offerBookmarkStatus: getChangedBookmarkOffer(state).isBookmark,
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferAction(offerId) {
    dispatch(fetchIdOffer(offerId));
  },
  loadRelatedOffersAction(offerId) {
    dispatch(fetchRelatedOffers(offerId));
  },
  onMouseOverOffer: (offer) => dispatch(setOverOfferId(offer)),
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
  },
  onChangeBookmarkOffers() {
    dispatch(fetchBookmarkOffers());
  },
  loadReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
});

OfferPage.propTypes = {
  offer: PropTypes.any.isRequired,
  relatedOffers: PropTypes.arrayOf(offerPropType).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
  offerId: PropTypes.string.isRequired,
  loadOfferAction: PropTypes.func.isRequired,
  loadRelatedOffersAction: PropTypes.func.isRequired,
  loadReviewsAction: PropTypes.func.isRequired,
  offerBookmarkStatus: PropTypes.any,
  onMouseOverOffer: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
