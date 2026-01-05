import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Ensured Leaflet map icons show properly in both dev and production environments.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export interface Attraction {
  title: string;
  desc: string;
  coords: [number, number];
}

export interface AttractionsMapProps {
  attractions: Attraction[];
  center?: [number, number];
  zoom?: number;
}

export const AttractionsMap = ({
  attractions,
  center = [0, 0],
  zoom = 10,
}: AttractionsMapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{
        height: '300px',
        width: '80%',
        margin: '0 auto', 
        display: 'block', 
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {attractions.map((a, i) => (
        <Marker key={i} position={a.coords}>
          <Popup>
            <strong>{a.title}</strong>
            <p>{a.desc}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
