import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getIsAuthorizedStatus, getUserAvatar, getUserEMail} from "../../store/selectors";
import {connect} from "react-redux";

const UserLinkContent = (props) => {
  const {userAvatar, userEMail, isAuthorizedStatus} = props;

  return (
    <Fragment>
      <div className="header__avatar-wrapper user__avatar-wrapper"
        style={isAuthorizedStatus ? {backgroundImage: `url(${userAvatar})`} : undefined}
      />
      {isAuthorizedStatus ? (
        <span className="header__user-name user__name">{userEMail}</span>
      ) : (
        <span className="header__login">Sign in</span>
      )}
    </Fragment>
  );
};

UserLinkContent.propTypes = {
  userEMail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userEMail: getUserEMail(state),
  userAvatar: getUserAvatar(state),
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

export {UserLinkContent};
export default connect(mapStateToProps)(UserLinkContent);
