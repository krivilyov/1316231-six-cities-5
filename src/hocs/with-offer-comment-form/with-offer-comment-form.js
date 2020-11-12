import React, {PureComponent} from "react";

const withOfferCommentForm = (Component) => {
  class WithOfferCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, review} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          onSubmit={this.handleSubmit}
          onFieldChange={this.handleFieldChange}
        />
      );
    }
  }
  return WithOfferCommentForm;
};

export default withOfferCommentForm;
