import React from "react";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

import {withLeafletMap} from "../../hocs/with-leaflet-map";
import {selectHoveredOfferId} from "../../selectors/offers";

const MapComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{height: `100%`}}/>
  );
});

MapComponent.displayName = `MapComponent`;

const mapStateToProps = (state) => ({
  hoveredOfferId: selectHoveredOfferId(state),
});

export const Map = connect(mapStateToProps)(withLeafletMap(MapComponent));
