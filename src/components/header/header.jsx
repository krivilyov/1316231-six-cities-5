import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import PropTypes from "prop-types";
import UserLink from "../user-link/user-link";

const Header = (props) => {
  const {appRoute} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {appRoute !== AppRoute.INDEX ? (
              <Link className={`header__logo-link header__logo-link--active`}
                to={AppRoute.INDEX}>
                <img className="header__logo" src={`/img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </Link>
            ) : (
              <a className={`header__logo-link`}>
                <img className="header__logo" src={`/img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </a>
            )}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <UserLink
                  appRoute={appRoute}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  appRoute: PropTypes.string.isRequired,
};

export default Header;
