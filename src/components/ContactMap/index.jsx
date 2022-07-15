// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Styled from "styled-components";
// Local | React-Redux
import { saveLeafletCss } from "Actions/contact";
// Styles

export function ContactMap() {
  const dispatch = useDispatch();
  const { leafletCss } = useSelector((state) => state.contact);

  useEffect(() => {
    if (!leafletCss) {
      fetch("https://unpkg.com/leaflet@1.8.0/dist/leaflet.css").then(
        (response) => {
          response.text().then(function (text) {
            dispatch(saveLeafletCss(text));
          });
        }
      );
    }
    // eslint-disable-next-line
  }, []);

  //   Wrapper = () => Styled.div`
  //   ${style}
  // `;
  const Wrapper = Styled.div`
  width: 90%;
  height: auto;
  @media only screen and (min-width: 1000px) {
    width: 80%;
  }
    ${leafletCss}
  `;

  return (
    <Wrapper>
      <MapContainer
        className="contact__infos__map"
        center={[47.238383838912014, 6.024384669532164]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // trunk-ignore(gitleaks/generic-api-key)
          url="https://api.mapbox.com/styles/v1/matthieumunoz/cl4ji3z2f001814mqlqqu6ndt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dGhpZXVtdW5veiIsImEiOiJjbDRqaHh3bDQwOXMyM2JueHZ1dGJvdmE2In0.sby-JMh6aub5MLKGLLEfHQ"
          loading="lazy"
        />
      </MapContainer>
    </Wrapper>
  );
}
