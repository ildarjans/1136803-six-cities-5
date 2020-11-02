import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";

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

class MapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: PIN_SIZE,
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: PIN_SIZE,
    });
    this._mapRef = React.createRef();

    this._markers = [];
  }

  _addMarkers() {
    this.props.offers
      .forEach((offer) => {
        const marker = leaflet.marker(
            [offer.coords.lat, offer.coords.lng],
            {icon: this._icon, id: offer.id});
        marker.addTo(this._map);
        this._markers.push(marker);
      });
  }

  _activateSingleIcon(offer) {
    this._markers
      .forEach((marker) => {
        if (marker.options.id === offer.id) {
          marker.setIcon(this._activeIcon);
        } else {
          marker.setIcon(this._icon);
        }
      });
  }

  _resetAllIcons() {
    this._markers
      .forEach((marker) => {
        marker.setIcon(this._icon);
      });
  }

  componentDidUpdate(prevProps) {
    const {activeOffer: prevOffer} = prevProps;
    const {activeOffer: nextOffer} = this.props;

    if (!prevOffer || prevOffer && nextOffer) {
      this._activateSingleIcon(nextOffer);
    }

    if (!nextOffer) {
      this._resetAllIcons();
    }
  }

  componentDidMount() {
    const cityCoords = CityCoords[this.props.activeCity];
    this._map = leaflet.map(`map`, {
      center: cityCoords,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    leaflet.tileLayer(TILE_LAYER, ATTRIBUTION).addTo(this._map);

    this._addMarkers();

    this._map.setView(cityCoords, ZOOM);

  }

  componentWillUnmount() {
    this._map = null;
    this._markers = [];
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}/>
    );
  }
}

MapComponent.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    offerPropTypes.isRequired
  ])
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
});

export const Map = connect(mapStateToProps)(MapComponent);
