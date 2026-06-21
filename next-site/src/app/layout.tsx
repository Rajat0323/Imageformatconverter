import "../styles/globals.css";
import "../styles/hub.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../constants";
import { organizationSchema, softwareSchema, websiteSchema } from "../seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | India's Best Image Compressor & Converter`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "India's #1 free image compressor — compress to 20KB, 50KB, 100KB for SSC, UPSC, KYC forms. Convert JPG PNG WEBP, remove backgrounds, and use AI image tools online.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: `${SITE_NAME} | Image Compressor, Converter & PDF Tools Online`,
    description:
      "Compress images to 20KB and 100KB, convert formats, and handle upload workflows for Indian government forms and portals.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — India's image compressor and converter`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Image Compressor & Converter Online India`,
    description:
      "Free image compressor for 20KB and 100KB uploads, format conversion, AI background removal, and more.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema, softwareSchema]),
          }}
        />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
