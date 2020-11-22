import React from "react";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getIsAuthorizedStatus} from "../../store/selectors";
import {AppRoute, offerBookmarkTypeProperty} from "../../const";
import OfferBookmarkContent from "../offer-bookmark-content/offer-bookmark-content";

const OfferBookmark = (props) => {
  const {offerId, isAuthorizedStatus, offerBookmarkStatus, onChangeBookmark} = props;
// debugger
  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

  return isAuthorizedStatus ? (
    <button className={`property__bookmark-button ${
      offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
    type="button"
    onClick={handleBookmarkClick}
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
        offerBookmarkTypeProperty={offerBookmarkTypeProperty.page}
      />
    </button>
  ) : (
    <Link to={AppRoute.LOGIN} className={`property__bookmark-button ${
      offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
    type="button"
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
        offerBookmarkTypeProperty={offerBookmarkTypeProperty.page}
      />
    </Link>
  );
};

OfferBookmark.propTypes = {
  offerId: PropTypes.string.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  offerBookmarkStatus: PropTypes.bool.isRequired,
  onChangeBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeBookmark(offerId, bookmarkStatus) {
    debugger
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferBookmark};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmark);
