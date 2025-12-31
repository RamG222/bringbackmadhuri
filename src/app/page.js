// page.js — updated (latest reporting: Aug 2025)
import "./globals.css";
import Image from "next/image";
import { FaPaw, FaRegHeart, FaHandsHelping, FaDonate } from "react-icons/fa";

export default function Home() {
  const lastUpdated = "January 1st, 2026 (latest public reporting)";

  return (
    <>
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="gradient-text">Bring Back Madhuri (Mahadevi)</h1>
            <p className="muted">Last updated: {lastUpdated}</p>
            <p className="lead">
              Madhuri — also called Mahadevi — is a temple elephant from Nandani
              village near Kolhapur whose welfare and custody have been the
              subject of court orders, public campaigns, and rehabilitation
              efforts. In mid-2025 courts ordered rehabilitation at a
              specialised facility (Vantara, Jamnagar), triggering both relief
              from welfare groups and strong local protests calling for her
              return.
            </p>
            <a href="#help" className="cta-button">
              How You Can Help
            </a>
          </div>
        </section>

        <section id="about" className="card-section">
          <h2>
            <FaRegHeart style={{ color: "#e57373", marginRight: 8 }} /> About
            Madhuri / Mahadevi
          </h2>
          <p>
            Madhuri (approx. 33–36 years old in reports) spent decades in the
            care of a Jain math in Nandani, Kolhapur. Veterinary inspections and
            welfare assessments in 2023–2024 raised concerns about chronic
            medical issues (including foot and joint problems) and psychological
            stress from long confinement and use in noisy processions.
          </p>
          <figure className="image-card">
            <Image
              src="/madhuri.png"
              alt="Madhuri the elephant"
              width={800}
              height={533}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(76,175,80,0.15)",
              }}
              priority
            />
            <figcaption>
              Madhuri (also referred to as Mahadevi) —{" "}
              <span style={{ color: "#888" }}>
                photo credit: local media / facility
              </span>
            </figcaption>
          </figure>
        </section>

        <section id="timeline" className="card-section ">
          <h2>
            <FaHandsHelping style={{ color: "#4CAF50", marginRight: 8 }} />{" "}
            Short Timeline
          </h2>
          <ul className="timeline-list">
            <li>
              <strong>~1992</strong> — Madhuri (Mahadevi) brought into care of
              the Nandani Jain math as a young elephant.
            </li>
            <li>
              <strong>2017</strong> — Renewed scrutiny after incidents and
              concerns about handling during public events.
            </li>
            <li>
              <strong>2023–2024</strong> — PETA and a Supreme Court–appointed
              High Powered Committee (HPC) inspected and reported welfare
              concerns.
            </li>
            <li>
              <strong>16 Jul 2025</strong> — Bombay High Court directed
              transfer/rehabilitation to a specialised facility (Vantara)
              prioritising welfare.
            </li>
            <li>
              <strong>25–30 Jul 2025</strong> — Supreme Court / further hearings
              resulted in orders upholding the transfer; Madhuri was moved to
              Vantara (Jamnagar).
            </li>
            <li>
              <strong>Aug 2025 onward</strong> — Local protests, petitions and
              political efforts to seek her return; Vantara and state
              authorities engaged in talks and proposed a satellite rehab / care
              plan in Kolhapur.
            </li>
          </ul>
        </section>

        <section id="campaign" className="card-section container">
          <h2>
            <FaRegHeart style={{ color: "#e57373", marginRight: 8 }} /> What is
            “Bring Back Madhuri”?
          </h2>
          <p>
            The campaign grew after court-ordered transfer. Thousands signed
            petitions and local supporters (including religious leaders and
            elected representatives) organised protests, arguing Madhuri is part
            of local religious life. At the same time, animal welfare
            organisations argue her medical and psychological needs require
            specialised rehabilitation.
          </p>
        </section>
        <div className="container">
          <section id="vantara" className="card-section container">
            <h2>
              <FaHandsHelping style={{ color: "#4CAF50", marginRight: 8 }} />{" "}
              Vantara / Rehabilitation Facility
            </h2>
            <p>
              Vantara's Radhe Krishna Temple Elephant Welfare Trust (Jamnagar)
              is described by operators as a dedicated rehabilitation facility
              offering specialised veterinary care, hydrotherapy, and more
              naturalistic enclosures. Following court directions, Madhuri was
              transferred there for rehabilitation and treatment. Vantara has
              subsequently engaged in discussions with Maharashtra authorities
              and the Jain Math about a possible local (Kolhapur-area) satellite
              rehabilitation plan to facilitate a future return if the courts
              permit and welfare can be ensured.
            </p>
          </section>
        </div>

        <section id="legal" className="card-section container">
          <h2>
            <FaHandsHelping style={{ color: "#4CAF50", marginRight: 8 }} />{" "}
            Legal & Welfare Findings
          </h2>
          <p>
            Courts emphasised that an elephant’s right to a quality life and
            necessary medical care must take precedence over ritual or
            procession use when the two conflict. Medical inspections documented
            wounds and chronic health concerns that required specialist
            treatment, which influenced judicial directions to prioritise
            rehabilitation.
          </p>
          <div className="container">
            <h3>Key judicial steps</h3>
            <ul>
              <li>
                <strong>Bombay High Court (16 Jul 2025):</strong> upheld HPC
                recommendations prioritising welfare and directing
                rehabilitation to a specialised centre.
              </li>
              <li>
                <strong>Supreme Court proceedings (late Jul 2025):</strong>{" "}
                further hearings and orders led to compliance reporting and
                involvement of a High Power Committee/HPC to work on a
                rehabilitation/return plan.
              </li>
            </ul>
          </div>
        </section>

        <section id="recent" className="card-section">
          <h2>
            <FaHandsHelping style={{ color: "#4CAF50", marginRight: 8 }} />{" "}
            Recent Developments
          </h2>
          <p>
            Public reporting (July–Aug 2025) indicates that Madhuri was
            transferred to Vantara, provoking significant local protest in
            Kolhapur. Subsequently, political leaders, the Maharashtra
            government, and Vantara have discussed options — including creating
            a satellite rehab facility near Nandani — and have asked the HPC to
            work towards a consensus-based rehabilitation/return plan. These
            discussions are ongoing and tied to court compliance schedules.
          </p>
        </section>

        <section id="help" className="card-section">
          <h2>
            <FaDonate style={{ color: "#FFD600", marginRight: 8 }} /> How You
            Can Help
          </h2>
          <ul className="help-list">
            <li>
              <strong>Support evidence-based welfare:</strong> Encourage
              decisions grounded in veterinary assessments and humane
              rehabilitation plans.
            </li>
            <li>
              <strong>Donate to verified welfare groups:</strong> Contribute to
              organisations doing on-the-ground elephant care and rehabilitation
              (verify credentials first).
            </li>
            <li>
              <strong>Share trusted updates:</strong> Avoid sharing unverified
              claims — rely on reputable media and official statements.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
