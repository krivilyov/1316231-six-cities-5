import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getIsAuthorizedStatus} from "../../store/selectors";
import {AppRoute} from "../../const";
import {Link} from "react-router-dom";
import UserLinkContent from "../user-link-content/user-link-content";

class UserLink extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getLink(currentRoute, isAuthorizedStatus) {
    switch (true) {
      case currentRoute !== AppRoute.FAVORITES && isAuthorizedStatus:
        return AppRoute.FAVORITES;
      case currentRoute !== AppRoute.LOGIN && !isAuthorizedStatus:
        return AppRoute.LOGIN;
      default:
        return false;
    }
  }

  render() {
    const {appRoute, isAuthorizedStatus} = this.props;
    const link = this._getLink(appRoute, isAuthorizedStatus);

    return appRoute !== AppRoute.FAVORITES && isAuthorizedStatus || appRoute !== AppRoute.LOGIN && !isAuthorizedStatus ? (
      <Link className="header__nav-link header__nav-link--profile"
        to={link}
      >
        <UserLinkContent />
      </Link>
    ) : (
      <a className="header__nav-link header__nav-link--profile header__nav-link--inactive">
        <UserLinkContent />
      </a>
    );
  }
}

UserLink.propTypes = {
  appRoute: PropTypes.string.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

export {UserLink};
export default connect(mapStateToProps)(UserLink);
