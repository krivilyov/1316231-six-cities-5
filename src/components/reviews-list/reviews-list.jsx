import React from "react";
import PropTypes from "prop-types";
import Review from "./../review/review";
import {reviewPropType} from "../../prop-types";
import OfferCommentForm from "../offer-comment-form/offer-comment-form";
import withOfferCommentForm from "../../hocs/with-offer-comment-form/with-offer-comment-form";

const OfferCommentFormWrapper = withOfferCommentForm(OfferCommentForm);

const ReviewsList = (props) => {
  const {reviews, offer, isAuthorizedStatus} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <Review
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>

      {isAuthorizedStatus && <OfferCommentFormWrapper
        offerId={offer.id}
      />}

    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
  offer: PropTypes.any.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

export default ReviewsList;
