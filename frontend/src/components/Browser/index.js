import React, { Component } from 'react';
import './Browser.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './UsersLocation';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <CurrentLocation
                    className="mapping"
                    centerAroundCurrentLocation
                    google={this.props.google}
                >
                    <Marker onClick={this.onMarkerClick} name={'Current Location'} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        {InfoWindow}
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </CurrentLocation>

            </div>


        );
    }
}
// export default GoogleApiWrapper(
//     (props) => ({
//       apiKey: props.apiKey
//     }
//   ))(MapContainer)
export default GoogleApiWrapper({
    apiKey: 'AIzaSyABdRIkqcDyFxSoksmn6XCkrU6Z5N2iZao'
})(MapContainer);
