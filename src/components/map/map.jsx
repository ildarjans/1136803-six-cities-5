import React from "react";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

import {withLeafletMap} from "../../hocs/with-leaflet-map";

const MapContainer = (props, ref) => {
  return (
    <div ref={ref} style={{height: `100%`}}/>
  );
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
});

export const Map = connect(mapStateToProps)(withLeafletMap(React.forwardRef(MapContainer)));

// ===========================================================
// THE FURTHER IMPLEMENTATION IS BETTER, MAYBE?
//
// const MapComponent = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} style={{height: `100%`}}/>
//   );
// });
//
// MapComponent.displayName = `MapComponent`;
//
// const mapStateToProps = (state) => ({
//   activeOfferId: state.activeOfferId,
// });
//
// export const Map = connect(mapStateToProps)(withLeafletMap(MapComponent));
