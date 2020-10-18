import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropType, reviewPropType} from "../../../prop-types";
import OfferCard from "../../offer-card/offer-card";
import OfferCommentForm from "../../offer-comment-form/offer-comment-form";

const OfferPage = (props) => {
  const {offer, reviews, relatedOffers} = props;
  const {pictures, isPremium, title, isBookMark, rating, type, bedroomsMax, guestsMax, price, amenities, hostInfo, description} = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {pictures.slice(0, 6).map((it, i) => (
                <div key={`${it}_${i}`} className="property__image-wrapper">
                  <img className="property__image" src={`img/${it}`} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : false}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${
                  isBookMark ? ` property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isBookMark ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsMax} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  {guestsMax}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.slice().map((it, i) => (
                    <li key={`${it}_${i}`} className="property__inside-item">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${hostInfo.isSuper ? `property__avatar-wrapper--pro` : false} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`img/${hostInfo.avatar}`} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {hostInfo.name}
                  </span>
                </div>
                <div className="property__description">
                  {description.map((item, i) => (
                    <p key={`${item}_${i}`} className="property__text">{item}</p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((item, i) => (
                    <li key={`${item.id}_${i}`} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={`img/${item.userInfo.userAvatar}`} width="54" height="54" alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                          {item.userInfo.userName}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `${item.reviewRating * 20}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {item.reviewText}
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">{item.reviewDate}</time>
                      </div>
                    </li>
                  ))}
                </ul>

                <OfferCommentForm />

              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {relatedOffers.map((item) => (
                <OfferCard
                  key={item.id}
                  offer={item}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: offerPropType.isRequired,
  relatedOffers: PropTypes.arrayOf(offerPropType).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default OfferPage;
