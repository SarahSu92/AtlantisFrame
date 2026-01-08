import { Link } from 'react-router';
import './Home.scss';
import {
  DestinationCards,
  type DestinationCard,
} from '../../models/DestinationCard';

export const HomePage = () => {
  return (
    <>
      <section className="hero">
         <div className="hero-overlay">
        <div className="hero-content">
          <h1>ADVENTURE AWAITS!</h1>
          <p>
            DISCOVER NEW DESTINATIONS, MEET NEW CULTURES, AND HAVE FUN ALONG THE WAY.
          </p>
          <Link to="/DestinationPage" className="herobtn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              d="M0,80 C360,250 1080,-50 1440,120 L1440,320 L0,320 Z"
              fill="#fff"
            />
          </svg>
        </div>
        </div>
      </section>

      <section className="herocards">
        <div className='cathero'>
        <h2 className='cat'>DESTINATIONS</h2>
        <p>Pick a country and start exploring!</p>
        </div>
        <div className="dest-cards">
          {DestinationCards.slice(0, 3).map((dest: DestinationCard) => (
            <div key={dest.id} className="destination-card">
              <img
                className="img"
                src={`${import.meta.env.BASE_URL}${dest.image}`}
                alt={dest.name}
              />
              <Link to={`/destination/${dest.id}`}>
                <h3>{dest.name}</h3>
                <div className="activities">
                  {dest.activities.map((activity) => (
                    <li key={activity} className="activity">
                      {activity}
                    </li>
                  ))}
                </div>
                <p>{dest.shortDescription}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="heroinfo">
        <Link to={`/DestinationPage`} className="">
          See all our destinations!
        </Link>
      </div>
    </>
  );
};
