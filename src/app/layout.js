import "./globals.css";
import Script from "next/script";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  metadataBase: new URL("https://bringbackmadhuri.com"),
  title: "Bring Back Madhuri | Kolhapur temple elephant welfare",
  description:
    "Follow the Bring Back Madhuri (Mahadevi) campaign: Kolhapur temple elephant welfare, Bombay High Court orders, Vantara Jamnagar rehabilitation, and how to help.",
  keywords: [
    "Madhuri elephant",
    "Mahadevi elephant",
    "Kolhapur elephant",
    "Bring Back Madhuri",
    "Bombay High Court elephant case",
    "Vantara Jamnagar",
    "elephant rehabilitation India",
    "temple elephant welfare",
  ],
  alternates: {
    canonical: "https://bringbackmadhuri.com",
  },
  openGraph: {
    title: "Bring Back Madhuri | Kolhapur temple elephant welfare",
    description:
      "Updates on the Bring Back Madhuri (Mahadevi) campaign: court directives, Vantara rehab, and welfare-first steps to return her home.",
    images: [
      {
        url: "https://bringbackmadhuri.com/madhuri.png",
        width: 1200,
        height: 630,
        alt: "Madhuri the Elephant",
      },
    ],
    siteName: "Bring Back Madhuri",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bring Back Madhuri | Kolhapur temple elephant welfare",
    description:
      "See the latest on the Bring Back Madhuri (Mahadevi) campaign, legal updates, Vantara rehab, and ways to support elephant welfare.",
    images: ["https://bringbackmadhuri.com/madhuri.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why was Madhuri (Mahadevi) moved to Vantara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Court and High Powered Committee directives cited chronic medical issues and recommended specialist rehabilitation at Vantara (Jamnagar) to stabilise her health.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Bring Back Madhuri campaign about?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local devotees, welfare groups, and officials are working on a welfare-first plan that could allow Madhuri's return to Kolhapur if health benchmarks and court conditions are met.",
      },
    },
    {
      "@type": "Question",
      name: "How can supporters help Madhuri now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Support evidence-based care, donate to verified elephant welfare organisations, and share trusted updates from official or reputable sources.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZZYMWB2KP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZZYMWB2KP');
          `}
        </Script>
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(faqSchema)}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
