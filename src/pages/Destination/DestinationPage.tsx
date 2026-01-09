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
      <p className="searchtext">
        Search by activity: hiking, monuments, beaches, urban culture.
      </p>

      <label htmlFor="activity-search" className="sr-only">
        Search destinations by activity
      </label>

      <input
        id="activity-search"
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
          <section key={region} className="region-section">
            <div className="cathero">
              <h2 className="cat">{region}</h2>
            </div>

            <div className="destination">
              {regionDestinations.map((dest) => (
                <article key={dest.id} className="destination-card">
                  <Link to={`/destination/${dest.id}`}>
                    <img
                      className="img"
                      src={
                        dest.image
                          ? `${import.meta.env.BASE_URL}${dest.image}`
                          : `${import.meta.env.BASE_URL}placeholder.jpg`
                      }
                      alt={dest.name}
                    />
                    <h3>{dest.name}</h3>
                  </Link>

                  {dest.activities.length > 0 && (
                    <ul className="activities">
                      {dest.activities.map((activity) => (
                        <li key={activity} className="activity">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p>{dest.shortDescription}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
