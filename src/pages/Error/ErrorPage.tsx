import { Link } from 'react-router';
import './Error.scss';

export const ErrorPage = () => {
  return (
    <>
      <div className='errorpage'>
        <h1>Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="errorbtn">
          Go to Home Page
        </Link>
      </div>
    </>
  );
};
