import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {getIsAuthorizedStatus} from "../../store/selectors";
import {AppRoute, offerBookmarkTypeProperty} from "../../const";
import OfferBookmarkContent from "../offer-bookmark-content/offer-bookmark-content";

const OfferCardBookmark = (props) => {
  const {offerId, offerBookmarkStatus, onChangeBookmark, isAuthorizedStatus} = props;

  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

  return isAuthorizedStatus ? (
    <button className={`place-card__bookmark-button${
      offerBookmarkStatus ? ` place-card__bookmark-button--active ` : ` `}button`}
    type="button"
    onClick={handleBookmarkClick}
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
        offerBookmarkTypeProperty={offerBookmarkTypeProperty.card}
      />
    </button>
  ) : (
    <Link to={AppRoute.LOGIN} className={`place-card__bookmark-button
        ${offerBookmarkStatus ? ` place-card__bookmark-button--active ` : ` `}button`}
    type="button"
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
        offerBookmarkTypeProperty={offerBookmarkTypeProperty.card}
      />
    </Link>
  );
};

OfferCardBookmark.propTypes = {
  offerId: PropTypes.string.isRequired,
  offerBookmarkStatus: PropTypes.bool.isRequired,
  onChangeBookmark: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferCardBookmark};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCardBookmark);
