import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {AppRoute} from "../../const";
import Header from "../header/header";

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {onSubmit} = this.props;

    e.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="page page--gray page--login">

        <Header
          appRoute={AppRoute.LOGIN}
        />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post"
                onSubmit={this.handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required=""
                    ref={this.loginRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password"
                    required=""
                    ref={this.passwordRef}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData) => dispatch(login(authData)),
});

export {LoginPage};
export default connect(null, mapDispatchToProps)(LoginPage);
