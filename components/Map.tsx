import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet-marker-icon.png",
  iconRetinaUrl: "/leaflet-marker-icon-2x.png",
  shadowUrl: "/leaflet-marker-shadow.png",
});

const Map = () => {
  return (
    <MapContainer
      center={[28.353, 81.585]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.353, 81.585]}>
        <Popup>
          Our Location
          <br /> Nepalgunj- 05, Banke, Nepal
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export { Map };
