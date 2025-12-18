import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="footercontent">
          <h4>Links</h4>
          <a className="links" href="#">
            Home
          </a>
          <a className="links" href="#">
            About us
          </a>
          <a className="links" href="#">
            Destinations
          </a>
          <a className="links" href="#">
            Contact
          </a>
        </div>

        <div className="footercontent">
          <h4>Follow Us</h4>
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
          <h4>Contact Us</h4>
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
