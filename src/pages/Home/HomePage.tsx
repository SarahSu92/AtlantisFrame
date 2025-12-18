import { Link } from 'react-router';
import './Home.scss';

export const HomePage = () => {
    return (
        <>
         <div className="herosection">
        <img
          className="heroimage"
          src={`${import.meta.env.BASE_URL}zoo-animals.jpg`}
          alt=""
        />
        <h1 className="heroh1">Find your next travel adventure</h1>
      </div>
      <div className="heroinfo">
        <Link to={`/DestinationPage`} className="herolink">
        <h2 className='herolink'>See all our destinations!</h2>
        </Link>
      </div>
        </>
    );
};