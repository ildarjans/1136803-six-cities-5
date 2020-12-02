import React from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import PropTypes from "prop-types";
import {mapCenterPropTypes, mapIconPropTypes} from "../../prop-types/map";
import {selectHoveredOfferId} from "../../selectors/selectors";

const PIN_SIZE = [30, 30];
const TILE_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const ATTRIBUTION = (
  `<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
    contributors &copy;
  <a href="https://carto.com/attributions">CARTO</a>`
);

const plainIcon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: PIN_SIZE,
});
const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: PIN_SIZE,
});

const getIcon = (icon, activeIconId) => {
  return icon.id === activeIconId ? activeIcon : plainIcon;
};

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._layerGroup = null;
    this._ref = React.createRef();
  }

  _renderMarkers() {
    const {icons, hoveredOfferId} = this.props;
    this._layerGroup = leaflet.layerGroup(icons.map((it) => {
      const icon = getIcon(it, hoveredOfferId);
      return leaflet.marker(
          [it.lat, it.lng], {icon});
    }));
    this._layerGroup.addTo(this._map);
  }

  componentDidUpdate() {
    const {lat, lng, zoom} = this.props.center;
    this._layerGroup.clearLayers();
    this._renderMarkers();
    this._map.flyTo([lat, lng], zoom);
  }

  componentDidMount() {
    const {lat, lng, zoom} = this.props.center;
    this._map = leaflet.map(this._ref.current, {
      center: {lat, lng},
      zoom,
      zoomControl: false,
      marker: true
    });
    leaflet.tileLayer(TILE_LAYER, ATTRIBUTION).addTo(this._map);

    this._renderMarkers();

    this._map.setView({lat, lng}, zoom);
  }


  render() {
    return <div ref={this._ref} style={{height: `100%`}}/>;
  }
}

Map.propTypes = {
  hoveredOfferId: PropTypes.number.isRequired,
  center: mapCenterPropTypes.isRequired,
  icons: PropTypes.arrayOf(mapIconPropTypes.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  hoveredOfferId: selectHoveredOfferId(state)
});


export default connect(mapStateToProps)(Map);
