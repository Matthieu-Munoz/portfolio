// Dependencies
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// Local | React-Redux
// Styles

function ContactMap() {
  var myIcon = new Icon({
    iconUrl:
      "https://res.cloudinary.com/matthieu-munoz/image/upload/v1655536463/eva_pin-fill_tolpb6.svg",
    iconSize: [35, 35],
  });
  return (
    <MapContainer
      className="contact__infos__map"
      center={[47.2899789559538, 5.014323442477459]}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // trunk-ignore(gitleaks/generic-api-key)
        url="https://api.mapbox.com/styles/v1/matthieumunoz/cl4ji3z2f001814mqlqqu6ndt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dGhpZXVtdW5veiIsImEiOiJjbDRqaHh3bDQwOXMyM2JueHZ1dGJvdmE2In0.sby-JMh6aub5MLKGLLEfHQ"
        loading="lazy"
      />
      <Marker
        icon={myIcon}
        loading="lazy"
        position={[47.26055934665719, 4.979900748951688]}
      ></Marker>
    </MapContainer>
  );
}

export default ContactMap;
