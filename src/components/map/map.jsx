import React from "react";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

import {withLeafletMap} from "../../hocs/with-leaflet-map";
import {selectActiveOfferId} from "../../selectors/offers";

const MapComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{height: `100%`}}/>
  );
});

MapComponent.displayName = `MapComponent`;

const mapStateToProps = (state) => ({
  activeOfferId: selectActiveOfferId(state),
});

export const Map = connect(mapStateToProps)(withLeafletMap(MapComponent));
