import React, {PureComponent} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {Cities} from "../../const";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.activeCity = this.props.activeCity;
    this.activeCityCenter = [52.38333, 4.9];
    this.zoom = 12;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    this.mapRef = React.createRef();
  }

  addMarkers() {
    this.props.offers.map((offer) => {
      leaflet
        .marker(
            offer.coordinates,
            {icon: this.icon})
        .addTo(this.map);
    });
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: this.activeCityCenter,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.map);

    this.addMarkers();

    this.map.setView(this.activeCityCenter, this.zoom);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  activeCity: PropTypes.oneOf(Cities).isRequired,
};

export default Map;
