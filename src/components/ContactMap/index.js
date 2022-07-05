// Dependencies
import { MapContainer, TileLayer } from "react-leaflet";
// Local | React-Redux
// Styles

function ContactMap() {
  return (
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
  );
}

export default ContactMap;
