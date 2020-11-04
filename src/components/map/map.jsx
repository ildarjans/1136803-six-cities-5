import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";
import {getMapPropsSelector} from "../../store/props-to-state-selectors";
import {mapPropTypes} from "../../prop-validation/map-prop-types";
import {Settings} from "../../const";

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
    const {onlyNearOffers} = this.props;
    options
      .slice(0, onlyNearOffers ? Settings.NEAR_OFFERS_DISPLAY_LIMIT : options.length)
      .forEach((option) => {
        const marker = leaflet.marker(
            [option.lat, option.lng],
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
    const {activeOfferId: prevActiveOfferId} = prevProps.propsForMap;
    const {activeOfferId: nextActiveOfferId} = this.props.propsForMap;

    if (!prevActiveOfferId || prevActiveOfferId && nextActiveOfferId) {
      this._activateSingleIcon(nextActiveOfferId);
    }

    if (!nextActiveOfferId) {
      this._resetAllIcons();
    }
  }

  componentDidMount() {
    this._map = leaflet.map(`map`, {
      center: this.props.propsForMap.center,
      zoom: this.props.propsForMap.zoom,
      zoomControl: false,
      marker: true
    });
    leaflet.tileLayer(TILE_LAYER, ATTRIBUTION).addTo(this._map);

    this._addMarkers();

    this._map.setView(
        this.props.propsForMap.center,
        this.props.propsForMap.zoom
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
  onlyNearOffers: PropTypes.bool.isRequired,
  propsForMap: mapPropTypes
};

const mapStateToProps = (state) => ({
  propsForMap: getMapPropsSelector(state),
});

export const Map = connect(mapStateToProps)(MapComponent);


