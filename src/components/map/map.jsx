import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {CityCoords} from "../../const";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import "leaflet/dist/leaflet.css";

const PIN_SIZE = [30, 30];
const ZOOM = 12;
const TILE_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const ATTRIBUTION = (
  `<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
    contributors &copy;
  <a href="https://carto.com/attributions">CARTO</a>`
);

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._activeCity = this.props.activeCity;
    this._activeCityCoords = [CityCoords[this._activeCity].lat, CityCoords[this._activeCity].lng];
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: PIN_SIZE,
    });

    this._mapRef = React.createRef();
  }

  _addMarkers() {
    this.props.offers.forEach((offer) => {
      leaflet
        .marker(
            [offer.coords.lat, offer.coords.lng],
            {icon: this._icon})
        .addTo(this._map);
    });
  }

  componentDidMount() {
    this._map = leaflet.map(`map`, {
      center: this._activeCityCoords,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    leaflet.tileLayer(TILE_LAYER, ATTRIBUTION).addTo(this._map);

    this._addMarkers();

    this._map.setView(this._activeCityCoords, ZOOM);
  }

  componentWillUnmount() {
    this._mapRef.current.remove();
    this._map = null;
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
