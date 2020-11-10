import React from "react";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

import {withMapLeaflet} from "../../hocs/with-map-leaflet";

const MapContainer = (props, ref) => {
  return (
    <div ref={ref} style={{height: `100%`}}/>
  );
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
});

export const Map = connect(mapStateToProps)(withMapLeaflet(React.forwardRef(MapContainer)));


