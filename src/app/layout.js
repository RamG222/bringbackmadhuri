import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "#BringBackMadhuri",
  description: "A campaign to bring back Madhuri, the elephant, to Kolhapur",
  openGraph: {
    title: "#BringBackMadhuri",
    description: "A campaign to bring back Madhuri, the elephant, to Kolhapur",
    images: [
      {
        url: "https://bringbackmadhuri.com/madhuri.png",
        width: 1200,
        height: 630,
        alt: "Madhuri the Elephant",
      },
    ],
    siteName: "Bring Back Madhuri",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </head>
      <body>{children}</body>
    </html>
  );
}
