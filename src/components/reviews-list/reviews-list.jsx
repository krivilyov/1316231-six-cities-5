import React from "react";
import PropTypes from "prop-types";
import Review from "./../review/review";
import {reviewPropType} from "../../prop-types";
import OfferCommentForm from "../offer-comment-form/offer-comment-form";
import withOfferCommentForm from "../../hocs/with-offer-comment-form/with-offer-comment-form";

const OfferCommentFormWrapper = withOfferCommentForm(OfferCommentForm);

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <Review
              key={review.reviewId}
              review={review}
            />
          ))
        }
      </ul>

      <OfferCommentFormWrapper />

    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default ReviewsList;
