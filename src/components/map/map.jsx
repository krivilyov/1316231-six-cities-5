import React, {PureComponent} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {connect} from "react-redux";
import {getSortCardTypeOffers} from "../../utils";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.zoom = 12;
    this.cityCoordinatesDefault = [52.3909553943508, 4.85309666406198];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    this.markers = [];
    this.activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });
    this.offers = getSortCardTypeOffers(this.props.offers, this.props.currentCardType, this.props.offerId);
  }

  componentDidMount() {
    const cityCoordinates = this.offers[0].cityCoordinates ? this.offers[0].cityCoordinates : this.cityCoordinatesDefault;

    this.map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.map);

    this._addMarkersToMap(this.offers);

    this.map.setView(cityCoordinates, this.zoom);
  }

  componentDidUpdate() {
    const {offers, currentCardType, offerId} = this.props;
    const sortCardTypeOffers = getSortCardTypeOffers(offers, currentCardType, offerId);
    const cityCoordinates = this.offers[0].cityCoordinates ? this.offers[0].cityCoordinates : this.cityCoordinatesDefault;
    this._removeMarkersFromMap();
    this._addMarkersToMap(sortCardTypeOffers);
    this.map.setView(cityCoordinates, this.zoom);
  }

  _addMarkersToMap(offers) {
    const {mouseOverOfferId} = this.props;
    offers.forEach(({coordinates, title, id}) => {
      const currentIcon = mouseOverOfferId === id ? this.activeIcon : this.icon;
      const marker = leaflet
        .marker(coordinates, {icon: currentIcon, title})
        .addTo(this.map);
      this.markers = [...this.markers, marker];
    });
  }

  _removeMarkersFromMap() {
    this.markers.forEach((it) => {
      it.removeFrom(this.map);
    });
    this.markers = [];
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  activeCity: PropTypes.string.isRequired,
  mouseOverOfferId: PropTypes.string,
  currentCardType: PropTypes.string,
  offerId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activeCity: state.COMMON.activeCity,
  mouseOverOfferId: state.COMMON.mouseOverOfferId,
});

export {Map};
export default connect(mapStateToProps)(Map);
