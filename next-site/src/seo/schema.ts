import { SITE_NAME, SITE_URL } from "@/constants";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.svg`,
  },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web Browser",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  description:
    "ImageFormatConverter is India's trusted image tool hub for compression to 20KB and 100KB, resizing, conversion, cropping, background removal, and AI-assisted image enhancement.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Compress JPG, PNG, and WEBP images",
    "Resize by dimensions, percentage, and presets",
    "Convert between JPG, PNG, and WebP",
    "Crop image with aspect presets",
    "Bulk image compression",
    "Rotate and flip image",
    "Background remover",
    "Image upscaler",
    "Download single image or ZIP file",
    "Browser-based processing",
    "Image compressor to 20KB online",
    "Compress image to 100KB online",
    "AI image compressor online",
    "Background remover online free",
  ],
};
