import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Polyline, Marker } from "react-google-maps";

const decodePolyline = require("decode-google-map-polyline");

const origin = { lat: 13.8029598, lng: 100.5390045 }; // mrt bang sue
const destination = { lat: 13.746067, lng: 100.538778 }; // central world

// set default center of map to be approximately centered between origin and destination
const defaultCenter = {
  lat: (origin.lat + destination.lat) / 2,
  lng: (origin.lng + destination.lng) / 2,
};
export class Direction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: undefined,
      steps: undefined,
      currentInstructions: "<p> hover on routes to see detail </p>",
      totalDistance: "",
      totalDuration: "",
      distance: "",
      duration: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("/direction");
    const directions = await response.json();
    if (!directions.routes[0]) return;
    const legs = directions.routes[0].legs[0];
    const steps = legs.steps;
    this.setState({
      directions: directions,
      steps: steps,
      totalDistance: legs.distance.text,
      totalDuration: legs.duration.text,
    });
  }

  // Result format from google's directionsAPI from back-end server are not directly compatible with Google Javascript API
  // so <DirectionsRenderer directions={this.state.directions} /> does not work
  // but we can still parse JSON response to create google map elements
  GoogleMapContainer = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={defaultCenter}
      defaultZoom={13}
      ref={this.setRef}
      className="googleMap"
    >
      {this.renderPolylines()}
      <Marker position={origin} />
      <Marker position={destination} />
    </GoogleMap>
  ));

  // for each steps in direction's route -> render Polyline Object
  renderPolylines = () => {
    const steps = this.state.steps;
    if (!steps) return;
    return (
      <div>
        {steps.map((s) => {
          // polyline path from directionsAPI are decoded
          // this method convert it to array of coordinates in a polyline to be compatible with Polyline props
          let path = decodePolyline(s.polyline.points);
          let polylineRef = React.createRef();
          return (
            <Polyline
              className="polyline"
              path={path}
              ref={polylineRef}
              onMouseOver={() => {
                this.setInstructions(s);
              }}
              {...polylineProps}
            ></Polyline>
          );
        })}
      </div>
    );
  };

  // set instructions of polyline
  setInstructions = (step) => {
    this.setState({
      currentInstructions: step.html_instructions,
      distance: step.distance.text,
      duration: step.duration.text,
    });
  };

  render() {
    return (
      <div>
        <div className="bodyHeader" style={{ marginBottom: "4px" }}>
          Directions from MRT Bangsue to Central World
          <span style={{ marginLeft: "8px" }}>{this.state.totalDistance}</span>
          <span style={{ marginLeft: "8px" }}>{this.state.totalDuration}</span>
        </div>
        <div className="directionDetail">
          <div style={{ marginRight: "16px" }}>
            <span style={{ marginLeft: "8px" }}>{this.state.distance}</span>
            <span style={{ marginLeft: "8px" }}>{this.state.duration}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.currentInstructions }}
          />
        </div>
        <this.GoogleMapContainer
          containerElement={
            <div
              style={{
                height: "70vh",
                width: "80vw",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            />
          }
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}

const polylineProps = {
  geodesic: true,
  options: {
    strokeColor: "#10E66A",
    strokeOpacity: 0.6,
    strokeWeight: 6,
    padding: "16px",
  },
};

export default Direction;
