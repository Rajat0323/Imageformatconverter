import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Image Compressor Online Free | Compress Images to 20KB, 50KB, 100KB",
  description:
    "Free image compressor online for India. Compress photos to 20KB, 50KB, and 100KB for SSC, UPSC, KYC forms. Convert JPG PNG WEBP in your browser.",
  keywords: [
    "image compressor online",
    "compress image to 100kb",
    "compress image to 50kb",
    "image compressor to 20kb",
    "photo compressor india",
    "free image compressor tool",
  ],
  openGraph: {
    title: `Image Compressor Online Free | ${SITE_NAME}`,
    description:
      "Compress images to exact KB sizes for Indian form uploads. Free, private, browser-based.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Image Compressor Online Free | ${SITE_NAME}`,
    description:
      "Compress images to 20KB, 50KB, and 100KB instantly in your browser.",
  },
};
