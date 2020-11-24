import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {connect} from "react-redux";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.zoom = 12;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    this.markers = [];
    this.activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });
  }

  componentDidMount() {
    const {offers} = this.props;
    const cityCoordinates = offers[0].cityCoordinates;

    this.map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCoordinates, this.zoom);

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.map);

    this._addMarkersToMap(offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;
    const cityCoordinates = offers[0].cityCoordinates;
    this.map.setView(cityCoordinates, this.zoom);
    this._removeMarkersFromMap();
    this._addMarkersToMap(offers);
  }

  _addMarkersToMap(offers) {
    const {overOfferId} = this.props;
    offers.forEach(({coordinates, title, id}) => {
      const currentIcon = overOfferId === id ? this.activeIcon : this.icon;
      const marker = leaflet
        .marker(coordinates, {icon: currentIcon, title})
        .addTo(this.map);
      this.markers = [...this.markers, marker];
    });
  }

  _removeMarkersFromMap() {
    this.markers.forEach((item) => {
      item.removeFrom(this.map);
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
  overOfferId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  overOfferId: state.COMMON.overOfferId,
});

export {Map};
export default connect(mapStateToProps)(Map);
