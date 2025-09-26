import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <h1>Bring Back Madhuri (Mahadevi)</h1>
          <p>
            Madhuri — also called Mahadevi — is a female temple elephant long
            associated with Nandani village near Kolhapur. Her relocation to a
            specialised elephant-care facility in Jamnagar (Vantara) sparked a
            large public campaign, legal battles, and ongoing discussions about
            the best place for her long-term welfare.
          </p>
        </section>

        <section id="about">
          <h2>About Madhuri / Mahadevi</h2>
          <p>
            Madhuri (approx. 36 years old) was brought to the Jain math in
            Nandani as a young elephant and lived there for decades. Over the
            years concerns were raised about her health and living conditions,
            which led to intervention by animal welfare groups and the courts.
          </p>

          <figure style={{ maxWidth: 800 }}>
            <Image
              src="/madhuri.png"
              alt="Madhuri the elephant"
              width={800}
              height={533}
              style={{ width: "100%", height: "auto" }}
              priority
            />
            <figcaption>
              Madhuri (also referred to as Mahadevi) — photo credit: local media
            </figcaption>
          </figure>
        </section>

        <section id="timeline">
          <h2>Short timeline</h2>
          <ul>
            <li>
              1992 — Madhuri (Mahadevi) came into care of the Nandani Jain math.
            </li>
            <li>
              2017 — An unfortunate incident led to renewed scrutiny of her
              care.
            </li>
            <li>
              2023–2024 — PETA India and a high-power committee raised welfare
              concerns.
            </li>
            <li>
              2024–2025 — Bombay High Court / High Power Committee recommended
              transfer to Vantara in Jamnagar for rehabilitation.
            </li>
            <li>
              2025 — Courts (including higher benches) and government
              authorities have been involved; Madhuri was moved to Vantara and
              ongoing talks about a rehabilitation/return plan continue.
            </li>
          </ul>
        </section>

        <section id="campaign">
          <h2>What is “Bring Back Madhuri”?</h2>
          <p>
            The campaign became popular after the transfer decision. Thousands
            of people have signed petitions and local supporters organised
            protests to express their emotional, cultural and religious
            attachment to Madhuri. Political leaders and community
            representatives have also engaged with the issue while the courts
            examined the welfare and legal questions.
          </p>
        </section>

        <section id="vantara">
          <h2>Vantara / Rehabilitation Facility</h2>
          <p>
            Vantara's Radhe Krishna Temple Elephant Welfare Trust (an elephant
            care facility in Jamnagar) is a specialised centre described by its
            operators as providing veterinary care, hydrotherapy and
            naturalistic enclosures for rescued or rehabilitated elephants. The
            High Power Committee and courts considered Vantara to be a suitable
            facility for Madhuri’s care when immediate welfare needs were the
            priority.
          </p>
        </section>

        <section id="legal">
          <h2>Legal & Welfare Findings</h2>
          <p>
            Courts have repeatedly emphasised that animal welfare outweighs
            cultural or religious usage when a conflict arises. Medical
            inspections cited wounds, foot rot and other health problems needing
            specialised treatment. As a result, judicial orders supported
            transfer for rehabilitation to a facility able to provide those
            treatments.
          </p>

          <div className="container">
            <h3>Bombay High Court Summary (Marathi)</h3>
            <p>
              बॉम्बे उच्च न्यायालयाने माहादेवीच्या कल्याणाला धार्मिक हक्कांवर
              प्राधान्य दिले आणि तिला योग्य वैद्यकीय मदत मिळवण्यासाठी
              हस्तांतरणाचे आदेश ठेवले आहेत. (सारांश)
            </p>
          </div>
        </section>

        <section id="recent">
          <h2>Recent developments</h2>
          <p>
            Media reports indicate that Madhuri was moved to the Vantara
            facility in Jamnagar following court orders, and later hearings have
            asked Vantara and the Nandani math to submit a joint
            rehabilitation/return plan. State and community representatives have
            been involved in exploring options that balance welfare with
            community concerns.
          </p>
        </section>

        <section id="help">
          <h2>How you can help</h2>
          <ul>
            <li>
              <strong>Support evidence-based welfare:</strong> Encourage
              decision making that follows veterinary assessments and
              rehabilitation plans.
            </li>
            <li>
              <strong>Donate to verified welfare groups:</strong> Contribute to
              organisations working on elephant health and habitat restoration.
            </li>
            <li>
              <strong>Share trusted updates:</strong> Avoid spreading unverified
              claims; share reports from reputable media and official sources.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
