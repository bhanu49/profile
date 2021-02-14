import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Maps = (props) => {
  return (
    <Map google={this.props.google} zoom={14}>
      <Marker onClick={() => console.log('maps')} name={'Current location'} />

      <InfoWindow>
        <div>
          <h1>test</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
}));
