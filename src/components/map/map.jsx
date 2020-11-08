import React, {PureComponent} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {Cities, CityCoordinates} from "../../const";
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
    this.activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });
  }

  componentDidMount() {
    const cityCoordinates = CityCoordinates[this.props.activeCity];

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

    this.props.offers.map((offer) => {
      leaflet
        .marker(
            offer.coordinates,
            {icon: this.icon})
        .addTo(this.map);
    });

    this.map.setView(cityCoordinates, this.zoom);
  }

  componentDidUpdate() {
    this.map.remove();
    const {offers, mouseOverOfferId} = this.props;

    const city = offers.find((offer) => {
      return +offer.id === +mouseOverOfferId;
    });

    const cityCoordinates = CityCoordinates[city.city];

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

    this.props.offers.map((offer) => {
      if (+offer.id === +mouseOverOfferId) {
        leaflet
          .marker(
              offer.coordinates,
              {icon: this.activeIcon})
          .addTo(this.map);
      } else {
        leaflet
          .marker(
              offer.coordinates,
              {icon: this.icon})
          .addTo(this.map);
      }
    });

    this.map.setView(cityCoordinates, this.zoom);
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
  mouseOverOfferId: PropTypes.number
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
  mouseOverOfferId: state.mouseOverOfferId,
});

export {Map};
export default connect(mapStateToProps)(Map);
