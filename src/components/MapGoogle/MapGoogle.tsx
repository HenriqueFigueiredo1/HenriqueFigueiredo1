import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled, { keyframes } from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'goog... Remove this comment to see the full error message
import GoogleMapReact from "google-map-react";

const keyBounce = keyframes`

  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }

`;

const MapStyled = styled.div`
  width: 100%;
  height: 100%;

  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
    animation: ${keyBounce} 0.5s infinite alternate;
  }
`;

const LocationPin = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="pin">
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <img
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
      className="pin-icon"
      alt=""
    />
  </div>
);

const MapGoogle = () => {
  const location = {
    lat: 23.761226,
    lng: 90.420766,
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MapStyled>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo` }}
          defaultCenter={location}
          defaultZoom={12}
          className="h-100 w-100"
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </MapStyled>
    </>
  );
};

export default MapGoogle;
