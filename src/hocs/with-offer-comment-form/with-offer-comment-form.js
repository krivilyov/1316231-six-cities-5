import React, {PureComponent} from "react";
import {CommentCharacter} from "../../const";

const withOfferCommentForm = (Component) => {
  class WithOfferCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
        isValidForm: false,
        isWaitedResponseFormStatus: false,
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleClearFormField = this.handleClearFormField.bind(this);
      this.handleChangeResponseFormStatus = this.handleChangeResponseFormStatus.bind(this);
    }

    componentDidUpdate() {
      const {rating, review} = this.state;
      this.setState({isValidForm: rating && review.length >= CommentCharacter.MIN
          && review.length <= CommentCharacter.MAX});
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    handleClearFormField() {
      this.setState({
        rating: ``,
        review: ``,
      });
    }

    handleChangeResponseFormStatus(isWaited) {
      this.setState(() => ({
        isWaitedResponseFormStatus: isWaited,
      }));
    }

    render() {
      const {rating, review, isValidForm, isWaitedResponseFormStatus} = this.state;
      const isDisabledSubmitButton = isValidForm && !isWaitedResponseFormStatus;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          isDisabledSubmitButton={isDisabledSubmitButton}
          onFieldChange={this.handleFieldChange}
          onClearFormField={this.handleClearFormField}
          onSetResponseFormStatus={this.handleChangeResponseFormStatus}
        />
      );
    }
  }
  return WithOfferCommentForm;
};

export default withOfferCommentForm;
