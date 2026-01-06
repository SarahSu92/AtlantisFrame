import './Footer.scss';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="footercontent">
          <h4 className="underline">Links</h4>
          <Link to="/" className="links">
              Home
            </Link>
            <Link to="/DestinationPage" className="links">
              Destinations
            </Link>
           <Link to="/AboutPage" className="links">
              About us
            </Link>
          <Link to="/ContactPage" className="links">
              Contact
            </Link>
        </div>

        <div className="footercontent">
          <h4 className="underline">Follow Us</h4>
          <a className="followus" href="#">
            Facebook
          </a>
          <a className="followus" href="#">
            Instagram
          </a>
          <a className="followus" href="#">
            Twitter
          </a>
        </div>

        <div className="contactus">
          <h4>
            <Link to="/ContactPage" className="underline">
              Contact Us
            </Link>
          </h4>
          <p className="footerp">AtlantisFrame</p>
          <p className="footerp">
            Östermalmsgatan 12, 114 42 Stockholm, Sweden
          </p>
          <p className="footerp">
            Email: info@AtlantisFrame.com | Phone: +46 0 000 000 00
          </p>
        </div>
      </div>
      <div className="copyright">
        &copy; 2025 AtlantisFrame AB. All rights reserved.
      </div>
    </>
  );
};
