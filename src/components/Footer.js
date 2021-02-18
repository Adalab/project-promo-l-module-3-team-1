import "../stylesheets/App.scss";
import footerLogo from "../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__small">Tree profile-cards @2021</small>
      <img className="footer__img" src={footerLogo} alt="logo adalad" />
    </footer>
  );
}
export default Footer;
