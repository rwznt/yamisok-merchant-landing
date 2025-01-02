  import './Footer.css';
  import logo from '../assets/foot-logo.svg';

  export const Footer = () => {
      return (
        <footer className="foot-main">
          <div className="foot-left">
            <img src={logo} alt="" className="foot-logo" />
            <div className="redirects">
              <a href="#" className="foot-links">
                About Us
              </a>
              <a href="#" className="foot-links">
                Careers
              </a>
              <a href="" className="foot-links">
                Our Story
              </a>
              <a href="#" className="foot-links">
                Contact Us
              </a>
            </div>
            <p className="foot-rights">
              © Yamisok Merchant 2024. All rights reserved
            </p>
          </div>
          <div className="foot-right">
            <form action="#" className="form-foot">
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
                <button type="submit" className="send-email">
                  Register
                </button>
              </div>
            </form>
          </div>
        </footer>
      );
  }

  export default Footer;