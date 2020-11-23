import React, {PureComponent} from "react";
import {RadioValues} from "../../const";
import PropTypes from "prop-types";
import {uploadReview} from "../../store/api-actions";
import {connect} from "react-redux";

class OfferCommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {rating, review, offerId, uploadReviewAction, onClearFormField, onSetResponseFormStatus} = this.props;
    onSetResponseFormStatus(true);
    uploadReviewAction({rating, review, offerId, onClearFormField, onSetResponseFormStatus});
  }

  render() {
    const {rating, review, isDisabledSubmitButton, onFieldChange} = this.props;

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RadioValues.map((value) => (
            <React.Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`}
                onChange={onFieldChange} type="radio" checked={rating === value}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={onFieldChange} value={review} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
            disabled={isDisabledSubmitButton ? `` : `disabled`}>Submit</button>
        </div>
      </form>
    );
  }
}

OfferCommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isDisabledSubmitButton: PropTypes.bool.isRequired,
  offerId: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onClearFormField: PropTypes.func.isRequired,
  onSetResponseFormStatus: PropTypes.func.isRequired,
  uploadReviewAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  uploadReviewAction(reviewData) {
    dispatch(uploadReview(reviewData));
  },
});

export {OfferCommentForm};
export default connect(null, mapDispatchToProps)(OfferCommentForm);
