import { useParams } from 'react-router';
import './DestinationDetail.scss';
import { Destinations } from '../../models/Destinations/DestinationIndex';
import {
  FiGlobe,
  FiZap,
  FiDollarSign,
  FiMapPin,
  FiSun,
  FiMessageCircle,
} from 'react-icons/fi';
import { AttractionsMap } from '../../components/AttractionsMap';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find destination by id
  const destination = Destinations.find((d) => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <>
      <section className="destination-detail">
        <section className="postition">
          <img
            className="heroimg"
            src={`${import.meta.env.BASE_URL}${destination.heroimage}`}
            alt={destination.name}
          />
          <h1>{destination.name} Travel Guide</h1>
          <p className="sub">
            {destination.country} · {destination.region}
          </p>
        </section>

        <section className="content">
          <section className="box">
            <h2 className="catdest">About {destination.name}</h2>
            <p className="text">{destination.longDescription}</p>
            <h3 className="tips">Tips</h3>
            <p className="text">{destination.tips}</p>
          </section>

          <section className="box">
            <h2 className="catdest">Quick Facts</h2>
            <div className="facts-grid">
              {[
                {
                  icon: <FiGlobe size={24} aria-hidden="true" />,
                  label: 'Country',
                  value: destination.country,
                },
                {
                  icon: <FiZap size={24} aria-hidden="true" />,
                  label: 'Religion',
                  value: destination.religion,
                },
                {
                  icon: <FiDollarSign size={24} aria-hidden="true" />,
                  label: 'Currency',
                  value: destination.currency,
                },
                {
                  icon: <FiMapPin size={24} aria-hidden="true" />,
                  label: 'Region',
                  value: destination.region,
                },
                {
                  icon: <FiSun size={24} aria-hidden="true" />,
                  label: 'Climate',
                  value: destination.climate,
                },
                {
                  icon: <FiMessageCircle size={24} aria-hidden="true" />,
                  label: 'Language',
                  value: destination.language,
                },
              ].map((fact) => (
                <article key={fact.label} className="fact-item">
                  <div className="icon">{fact.icon}</div>
                  <div>
                    <h4 className="facts">{fact.label}</h4>
                    <p className="fact">{fact.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="box">
            <h2 className="catdest">Best Time to Travel</h2>
            <ul className="text">
              <li>May–September: Best weather for sightseeing.</li>
              <li>December–February: Ideal for skiing.</li>
              <li>April & October: Fewer crowds and mild temperatures.</li>
            </ul>
          </section>

          <section className="box">
            <h2 className="catdest">Hotels</h2>
            <div className="hotels-grid">
              {destination.hotels.map((hotel) => (
                <article
                  key={hotel.name}
                  className="hotel-card"
                  aria-label={`Visit ${hotel.name} website (opens in a new tab)`}
                >
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    <div className="hotel-card-image">
                      <img
                        src={`${import.meta.env.BASE_URL}${hotel.img}`}
                        alt={hotel.name}
                      />
                    </div>
                    <div className="hotel-card-content">
                      <h3>{hotel.name}</h3>
                      <p className="hotel-description">{hotel.description}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="box attractions-section">
            <h2 id="attractions-map-label" className="catdest">
              What to See & Do
            </h2>
            <p>
              Use zoom in and out to see all attractions. Click on the
              pointer/marker to read more.
            </p>

            <p id="map-instructions" className="sr-only">
              Interactive map of attractions. Use keyboard to navigate markers.
            </p>

            <div
              className="map-wrapper"
              role="region"
              aria-labelledby="attractions-map-label"
              aria-describedby="map-instructions"
            >
              <AttractionsMap
                attractions={destination.attractions || []}
                center={destination.attractions?.[0]?.coords || [0, 0]}
                zoom={12}
              />
            </div>

            {destination.attractions.length > 0 && (
              <section className="box sr-only">
                <h3 id="attractions-list-label" className="sr-only">
                  All Attractions (text list)
                </h3>
                <ul aria-labelledby="attractions-list-label">
                  {destination.attractions.map((attr) => (
                    <li key={attr.title}>
                      {attr.title}: {attr.desc}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </section>

          <section className="box">
            <h2 className="catdest">Budget</h2>
            <p className="budgettext">{destination.budget}</p>
          </section>

          <section className="postition">
            <img
              className="bottomimg"
              src={`${import.meta.env.BASE_URL}${destination.image2}`}
              alt={destination.name}
            />
          </section>
        </section>
      </section>
    </>
  );
};
