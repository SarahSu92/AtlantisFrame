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
import { AttractionsMap } from '../../components/Footer/AttractionsMap';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find destination by id
  const destination = Destinations.find((d) => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <>
      <div className="destination-detail">
        <div className="postition">
          <img 
            className='heroimg'
            src={`${import.meta.env.BASE_URL}${destination.heroimage}`}
            alt={destination.name}
          />
          <h1>{destination.name} Travel Guide</h1>
          <p className="sub">
            {destination.country} · {destination.region}
          </p>
        </div>

        <div className="content">
          <section className="box">
            <h2>About {destination.name}</h2>
            <p className="text">{destination.longDescription}</p>
            <h4 className="tips">Tips</h4>
            <p className="text">{destination.tips}</p>
          </section>

          <h2>Quick Facts</h2>

          <div className="facts-grid">
            <div className="fact-item">
              <div className="icon">
                <FiGlobe size={24} />
              </div>
              <div>
                <h4 className="facts">Country</h4>
                <p className="fact">{destination.country}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiZap size={24} />
              </div>
              <div>
                <h4 className="facts">Religion</h4>
                <p className="fact">{destination.religion}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiDollarSign size={24} />
              </div>
              <div>
                <h4 className="facts">Currency</h4>
                <p className="fact">{destination.currency}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="facts">Region</h4>
                <p className="fact">{destination.region}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiSun size={24} />
              </div>
              <div>
                <h4 className="facts">Climate</h4>
                <p className="fact">{destination.climate}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiMessageCircle size={24} />
              </div>
              <div>
                <h4 className="facts">Language</h4>
                <p className="fact">{destination.language}</p>
              </div>
            </div>
          </div>

          <section className="box">
            <h2>Best Time to Travel</h2>
            <ul className="text">
              <li>May–September: Best weather for sightseeing.</li>
              <li>December–February: Ideal for skiing.</li>
              <li>April & October: Fewer crowds and mild temperatures.</li>
            </ul>
          </section>

          <section className="box">
            <h2>Hotels</h2>
            <div className="hotels-grid">
              {destination.hotels.map((hotel) => (
                <a
                  key={hotel.name}
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-card"
                >
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
              ))}
            </div>
          </section>

          <section className="box attractions-section">
            <h2>What to See & Do</h2>
            <p>
              Use zoom in and out to see all attractions. Click on the
              pointer/marker to read more.{' '}
            </p>
            <AttractionsMap
              attractions={destination.attractions || []}
              center={destination.attractions?.[0]?.coords || [0, 0]}
              zoom={12}
            />
          </section>

          <section className="box">
            <h2>Budget</h2>
            <p className="budgettext">{destination.budget}</p>
          </section>

          <div className="postition">
            <img
              className='bottomimg'
              src={`${import.meta.env.BASE_URL}${destination.image2}`}
              alt={destination.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};
