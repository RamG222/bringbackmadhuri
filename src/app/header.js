import { FaArrowRight, FaLeaf } from "react-icons/fa";

function Header() {
  return (
    <div className="header-shell">
      <header>
        <div className="brand">
          <FaLeaf color="#16a34a" size={20} />
          <span>#BringBackMadhuri</span>
          <span className="brand-pill">elephant welfare</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Story</a>
            </li>
            <li>
              <a href="#about">Facts</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#legal">Legal</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#help" className="nav-cta">
                Help now <FaArrowRight size={14} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
