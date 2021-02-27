import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const Maps = (props) => {
  const pos = { lat: 49.48468, lng: 8.47672 };
  return (
    <GoogleMap defaultZoom={10} defaultCenter={pos}>
      {<Marker position={pos} />}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Maps));
