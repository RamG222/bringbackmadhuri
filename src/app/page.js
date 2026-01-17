// page.js — updated (latest reporting: Jan 2026)
import "./globals.css";
import Image from "next/image";
import { FaPaw, FaRegHeart, FaHandsHelping, FaDonate, FaLeaf } from "react-icons/fa";

export default function Home() {
  const lastUpdated = "January 18, 2026 (latest compiled reporting)";

  return (
    <main>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">
            <FaLeaf size={14} /> Welfare-first campaign
          </span>
          <h1>Bring Back Madhuri (Mahadevi)</h1>
          <p className="muted">Last updated: {lastUpdated}</p>
          <p className="lead">
            Madhuri — also called Mahadevi — is a temple elephant from Nandani village near Kolhapur. Court directions in 2025 sent
            her for rehabilitation at Vantara (Jamnagar). As of early 2026, she remains under specialist care while courts, the High
            Powered Committee (HPC), state officials, and community stakeholders examine a welfare-first pathway for any future
            return.
          </p>
          <div className="pill-row">
            <span className="pill">Vet-led rehab</span>
            <span className="pill">High Power Committee (HPC)</span>
            <span className="pill">Community dialogue</span>
            <span className="pill">Legal oversight</span>
          </div>
          <div className="cta-row">
            <a href="#help" className="cta-button">
              How you can help
            </a>
            <a href="#timeline" className="cta-button secondary">
              View the timeline
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="image-card">
            <Image src="/madhuri.png" alt="Madhuri the elephant" width={720} height={480} priority />
            <figcaption>Mahadevi (Madhuri) — photo credit: local media / facility</figcaption>
          </figure>
        </div>
      </section>

      <div className="card-grid" id="about">
        <section className="card-section">
          <h2>
            <FaRegHeart color="#e57373" /> About Madhuri / Mahadevi
          </h2>
          <p>
            Madhuri (approx. 34–37 years old per recent filings) spent decades at the Nandani Jain math in Kolhapur. Vet assessments
            in 2023–2024 flagged chronic foot and joint issues, wounds, and stress linked to confinement and procession noise.
          </p>
          <p className="muted">
            Welfare reviewers recommended specialised care, enrichment, and lighter workloads to prevent further deterioration.
          </p>
        </section>

        <section id="campaign" className="card-section">
          <h2>
            <FaPaw color="#16a34a" /> What is “Bring Back Madhuri”?
          </h2>
          <p>
            After the 2025 transfer order, thousands signed petitions. Local leaders and devotees pressed for her return, while
            animal-welfare organisations stressed specialist rehab and medical stability before any relocation. Through late 2025,
            state officials, Vantara, and the Jain math discussed a possible Kolhapur-area satellite rehab to align welfare and
            community ties.
          </p>
          <div className="stacked">
            <span className="tag">Community sentiment</span>
            <span className="tag">Welfare-first legal guardrails</span>
            <span className="tag">Dialogue with Vantara + state</span>
          </div>
        </section>
      </div>

      <section id="timeline" className="card-section">
        <h2>
          <FaHandsHelping color="#16a34a" /> Short Timeline
        </h2>
        <ul className="timeline-list">
          <li>
            <strong>~1992</strong> — Brought into care of the Nandani Jain math as a young elephant.
          </li>
          <li>
            <strong>2017</strong> — Renewed scrutiny after handling concerns during events.
          </li>
          <li>
            <strong>2023–2024</strong> — PETA and HPC inspections document welfare concerns and recommend specialist care.
          </li>
          <li>
            <strong>16 Jul 2025</strong> — Bombay High Court directs rehabilitation at Vantara, prioritising welfare.
          </li>
          <li>
            <strong>25–30 Jul 2025</strong> — Supreme Court hearings uphold the transfer; Madhuri moved to Jamnagar.
          </li>
          <li>
            <strong>Sep–Dec 2025</strong> — HPC and state discuss a Kolhapur-area satellite rehab; interim welfare updates note ongoing
            foot and joint treatment at Vantara.
          </li>
          <li>
            <strong>Jan 2026</strong> — Madhuri remains in rehab; HPC monitoring and court-reviewed reports guide any potential return
            pathway.
          </li>
        </ul>
      </section>

      <div className="card-grid" id="vantara">
        <section className="card-section">
          <h2>
            <FaHandsHelping color="#16a34a" /> Vantara / Rehabilitation Facility
          </h2>
          <p>
            Radhe Krishna Temple Elephant Welfare Trust (Vantara, Jamnagar) provides specialist veterinary care, hydrotherapy, and
            enriched enclosures. Courts directed the transfer to stabilise her health before any further decisions.
          </p>
          <p className="muted">
            Late-2025 discussions with Maharashtra officials and the Jain math include a possible Kolhapur satellite rehab to balance
            welfare with community ties, subject to judicial approval and medical benchmarks.
          </p>
        </section>

        <section id="legal" className="card-section">
          <h2>
            <FaHandsHelping color="#16a34a" /> Legal & Welfare Findings
          </h2>
          <p>
            Courts reaffirmed that an elephant’s right to health and humane care takes precedence over ceremonial use when they
            conflict. Oversight has continued into 2026 via compliance reports and HPC monitoring.
          </p>
          <h3>Key judicial steps</h3>
          <ul className="stacked">
            <li>
              <strong>Bombay High Court (16 Jul 2025):</strong> upheld HPC recommendations and mandated rehab at a specialist centre.
            </li>
            <li>
              <strong>Supreme Court (late Jul 2025):</strong> ordered compliance reporting and HPC involvement to craft a welfare-first
              rehabilitation/return roadmap, continuing into 2026.
            </li>
          </ul>
        </section>
      </div>

      <section id="recent" className="card-section">
        <h2>
          <FaHandsHelping color="#16a34a" /> Recent Developments
        </h2>
        <p>
          Public reporting through late 2025 confirms Madhuri’s continued rehab at Vantara with ongoing veterinary management of
          foot and joint issues. State officials, Vantara, and Jain math representatives have discussed a Kolhapur-area satellite
          facility. As of January 2026, any return remains subject to court oversight, HPC recommendations, and health benchmarks.
        </p>
      </section>

      <section id="faq" className="card-section">
        <h2>
          <FaRegHeart color="#e57373" /> FAQ: Bring Back Madhuri (Mahadevi)
        </h2>
        <ul className="help-list">
          <li>
            <strong>Why was Madhuri moved to Vantara?</strong> Courts and the HPC cited chronic medical issues and ordered specialist
            rehabilitation at Vantara (Jamnagar) to stabilise her health.
          </li>
          <li>
            <strong>Can she return to Kolhapur?</strong> A welfare-first roadmap is under discussion, including a Kolhapur-area
            satellite rehab; any return depends on medical benchmarks, HPC review, and court permission.
          </li>
          <li>
            <strong>What is her status as of Jan 2026?</strong> She remains in rehab at Vantara with ongoing veterinary monitoring and
            compliance reporting to the courts and HPC.
          </li>
          <li>
            <strong>How can supporters help now?</strong> Back evidence-based veterinary care, donate to verified elephant welfare
            organisations, and share trusted updates from reputable sources.
          </li>
        </ul>
      </section>

      <section id="help" className="card-section">
        <h2>
          <FaDonate color="#f59e0b" /> How You Can Help
        </h2>
        <ul className="help-list">
          <li>
            <strong>Support evidence-based welfare:</strong> Encourage decisions grounded in veterinary assessments and humane
            rehabilitation plans.
          </li>
          <li>
            <strong>Donate to verified welfare groups:</strong> Contribute to organisations delivering on-the-ground elephant care
            (verify credentials first).
          </li>
          <li>
            <strong>Share trusted updates:</strong> Avoid sharing unverified claims — rely on reputable media and official statements.
          </li>
        </ul>
      </section>
    </main>
  );
}
