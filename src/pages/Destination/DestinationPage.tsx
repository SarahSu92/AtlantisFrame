
import { Link } from 'react-router';
import './Destination.scss';
import { Destinations } from '../../models/Destinations/DestinationIndex';

export const DestinationPage = () => {
  // Gruppera destinations per region
  const regions = ["EUROPE", "NORTH AMERICA", "AFRICA", "ASIA"];

  return (
    <div>
      <h1>All Destinations</h1>

      {regions.map(region => {
        const regionDestinations = Destinations.filter(d => d.region === region);

        return (
          <div key={region}>
            <h2>{region}</h2>
            <div className="destination">
              {regionDestinations.map(dest => (
                <div key={dest.id} className="destination-card">
                  <Link to={`/destination/${dest.id}`}>
                    <h3>{dest.name}</h3>
                    <p>{dest.activities}</p>
                    <p>{dest.shortDescription}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
