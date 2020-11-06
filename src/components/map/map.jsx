import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

import {mapPropTypes} from "../../prop-validation/map-prop-types";

const PIN_SIZE = [30, 30];
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

    this._markers = [];

  }

  _addMarkers() {
    const {options} = this.props.propsForMap;
    options
      .forEach((option) => {
        const marker = leaflet.marker(
            [option.latitude, option.longitude],
            {icon: this._icon, id: option.id});
        marker.addTo(this._map);
        this._markers.push(marker);
      });
  }

  _activateSingleIcon(id) {
    this._markers
      .forEach((marker) => {
        if (marker.options.id === id) {
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
    const {activeOfferId: prevActiveOfferId} = prevProps;
    const {activeOfferId: nextActiveOfferId} = this.props;

    if (!prevActiveOfferId || prevActiveOfferId && nextActiveOfferId) {
      this._activateSingleIcon(nextActiveOfferId);
    }

    if (!nextActiveOfferId) {
      this._resetAllIcons();
    }
  }

  componentDidMount() {
    const {latitude: lat, longitude: lng, zoom} = this.props.propsForMap.center;
    this._map = leaflet.map(`map`, {
      center: {lat, lng},
      zoom,
      zoomControl: false,
      marker: true
    });
    leaflet.tileLayer(TILE_LAYER, ATTRIBUTION).addTo(this._map);

    this._addMarkers();

    this._map.setView(
        {lat, lng},
        zoom
    );
  }

  componentWillUnmount() {
    this._map = null;
    this._markers = [];
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

MapComponent.propTypes = {
  activeOfferId: PropTypes.string.isRequired,
  propsForMap: mapPropTypes
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
});

export const Map = connect(mapStateToProps)(MapComponent);


