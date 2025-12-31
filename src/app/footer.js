import { FaHeart, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-attractive">
      <div className="footer-content">
        <span className="footer-title">
          <FaHeart color="#e57373" style={{ marginRight: 8 }} />
          &copy; 2025 Bring Back Madhuri Campaign
        </span>
        <span>
          <FaGlobe color="#4CAF50" style={{ marginRight: 6 }} />
          Made by <a href="http://ramscript.com" target="_blank" rel="noopener noreferrer">ramscript.com</a>
        </span>
        <span>
          <FaEnvelope color="#FFD600" style={{ marginRight: 6 }} />
          <a href="mailto:info@bringbackmadhuri.com">info@bringbackmadhuri.com</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
