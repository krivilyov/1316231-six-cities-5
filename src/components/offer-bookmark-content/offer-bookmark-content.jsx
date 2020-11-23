import React, {Fragment} from "react";
import PropTypes from "prop-types";

const OfferBookmarkContent = (props) => {
  const {offerBookmarkStatus, offerBookmarkTypeProperty} = props;
  const {bemBlock, width, height} = offerBookmarkTypeProperty;

  return (
    <Fragment>
      <svg className={`${bemBlock}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
    </Fragment>
  );
};

OfferBookmarkContent.propTypes = {
  offerBookmarkStatus: PropTypes.bool.isRequired,
  offerBookmarkTypeProperty: PropTypes.exact({
    bemBlock: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferBookmarkContent;
