
import { Link } from 'react-router';
import './Destination.scss';
import { DestinationActivities } from '../../models/DestinationActivities';
import { useState } from 'react';

export const DestinationPage = () => {
  const [search, setSearch] = useState('');
  const regions = ["EUROPE", "NORTH AMERICA", "AFRICA", "ASIA"];

   const filterByActivity = (destinations: typeof DestinationActivities, search: string) =>
    !search.trim()
      ? destinations
      : destinations.filter(dest =>
          dest.activities.some(activity =>
            activity.toLowerCase().includes(search.toLowerCase())
          )
        );

  return (
    <div className="destination-page">
      <h1>All Destinations</h1>

       <input
        type="text"
        placeholder="Search by activity (e.g. hiking, monuments)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />

       {regions.map(region => {
        const regionDestinations = filterByActivity(
          DestinationActivities.filter(d => d.region === region),
          search
        );

        if (regionDestinations.length === 0) return null;

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

