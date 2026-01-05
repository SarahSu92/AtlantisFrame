import { Link } from 'react-router';
import './Destination.scss';
import { DestinationCards } from '../../models/DestinationCard';
import { useState } from 'react';

export const DestinationPage = () => {
  const [search, setSearch] = useState('');
  const regions = ['EUROPE', 'NORTH AMERICA', 'AFRICA', 'ASIA'];

  const filterByActivity = (
    destinations: typeof DestinationCards,
    search: string
  ) =>
    !search.trim()
      ? destinations
      : destinations.filter((dest) =>
          dest.activities.some((activity) =>
            activity.toLowerCase().includes(search.toLowerCase())
          )
        );

  return (
    <div className="destination-page">
      <h1>All Destinations</h1>
      <h4 className="searchactivity">
        Search by activity: hiking, monuments, beaches, urban culture.
      </h4>

      <input
        type="text"
        placeholder="type activity..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {regions.map((region) => {
        const regionDestinations = filterByActivity(
          DestinationCards.filter((d) => d.region === region),
          search
        );

        if (regionDestinations.length === 0) return null;

        return (
          <div key={region}>
            <h2>{region}</h2>
            <div className="destination">
              {regionDestinations.map((dest) => (
                <div key={dest.id} className="destination-card">
                  <img
                    className="img"
                    src={
                      dest.image
                        ? `${import.meta.env.BASE_URL}${dest.image}`
                        : `${import.meta.env.BASE_URL}placeholder.jpg`
                    }
                    alt={dest.name}
                  />
                  <Link to={`/destination/${dest.id}`}>
                    <h3>{dest.name}</h3>
                    <div className="activities">
                      {dest.activities.map((activity) => (
                        <span key={activity} className="activity">
                          {activity}
                        </span>
                      ))}
                    </div>
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
