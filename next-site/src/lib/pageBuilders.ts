import type { IntentPage } from "./intentPages";
import type { ToolPage } from "./toolCatalog";

type ConverterSpec = {
  slug: string;
  from: string;
  to: string;
  format: string;
  title: string;
  description: string;
  heroTitle: string;
  heroCopy: string;
  introCopy: string;
  related: { href: string; label: string }[];
};

type PlatformSpec = {
  slug: string;
  platform: string;
  targetKb: number;
  format: string;
  title: string;
  description: string;
  heroTitle: string;
  heroCopy: string;
  introCopy: string;
  useCases: { title: string; description: string }[];
  related: { href: string; label: string }[];
};

type ResizeSpec = {
  slug: string;
  width: number;
  height: number;
  label: string;
  title: string;
  description: string;
  heroTitle: string;
  heroCopy: string;
  introCopy: string;
  related: { href: string; label: string }[];
};

const defaultBenefits = [
  { title: "Private browser workflow", description: "Images stay on your device while you compress, convert, or resize them." },
  { title: "Instant preview", description: "Compare original and output size before you download the final file." },
  { title: "No account required", description: "Open the tool, upload, and download without sign-up friction." },
];

const defaultFaqs = (subject: string) => [
  { question: `Is this ${subject} tool free?`, answer: "Yes. The tool is free and runs entirely in your browser." },
  { question: "Are my files uploaded to a server?", answer: "No. Processing happens locally on your device for better privacy." },
  { question: "Which formats are supported?", answer: "You can work with JPG, PNG, and WebP in most workflows on this site." },
];

export function buildExactKbTool(kb: number, angle: string): ToolPage {
  const isMb = kb >= 1024;
  const slug = isMb ? "compress-image-to-1mb" : `compress-image-to-${kb}kb`;
  const label = isMb ? "1MB" : `${kb}KB`;
  const target = isMb ? 1024 : kb;

  return {
    slug,
    name: `Compress Image to ${label}`,
    shortName: label,
    category: "image",
    mode: "compressor",
    title: `Compress Image to ${label} Online Free`,
    description: `Compress image to ${label} online free. ${angle} Fast, private, browser-based compression for JPG, PNG, and WebP.`,
    heroTitle: `Compress Image to ${label} Online`,
    heroCopy: `Use the ${label} preset to reduce image file size for ${angle.toLowerCase()} without uploading files to a server.`,
    badge: "Exact-size tool",
    featureList: [
      `${label} target preset`,
      "Before and after size preview",
      "JPG, PNG, and WebP support",
      "Private browser-based processing",
    ],
    faqList: [
      {
        question: `Can I compress an image to ${label}?`,
        answer: `Yes. The tool aims for ${label} or smaller and shows the closest result when an exact match is not possible.`,
      },
      {
        question: `What format works best for ${label}?`,
        answer: "JPG or WebP usually reaches smaller targets more easily than PNG when transparency is not required.",
      },
      {
        question: `Is the ${label} compressor free?`,
        answer: "Yes. It works in the browser with no sign-up and no server upload.",
      },
    ],
    defaultTargetKB: target,
  };
}

export function buildConverterIntent(spec: ConverterSpec): IntentPage {
  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    heroTitle: spec.heroTitle,
    heroCopy: spec.heroCopy,
    introTitle: `Why convert ${spec.from} to ${spec.to}`,
    introCopy: spec.introCopy,
    ctaLabel: `Open ${spec.from} to ${spec.to} converter`,
    toolHref: `/image-converter?format=${encodeURIComponent(spec.format)}`,
    highlights: [
      `${spec.to} output selected automatically.`,
      "Convert and compress in one browser workflow.",
      "Works on desktop and mobile browsers.",
      "No sign-up or cloud upload required.",
    ],
    benefits: defaultBenefits,
    useCases: [
      { title: "Website publishing", description: `Prepare ${spec.to} assets that load faster on blogs, stores, and landing pages.` },
      { title: "Email and messaging", description: "Send lighter attachments that upload faster and use less storage." },
      { title: "Social uploads", description: "Convert files before posting to platforms with size or format limits." },
    ],
    faqList: defaultFaqs(`${spec.from} to ${spec.to} converter`),
    relatedLinks: spec.related,
  };
}

export function buildPlatformIntent(spec: PlatformSpec): IntentPage {
  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    heroTitle: spec.heroTitle,
    heroCopy: spec.heroCopy,
    introTitle: `Built for ${spec.platform} uploads`,
    introCopy: spec.introCopy,
    ctaLabel: `Compress image for ${spec.platform}`,
    toolHref: `/image-compressor?target=${spec.targetKb}&format=${encodeURIComponent(spec.format)}`,
    highlights: [
      `${spec.targetKb}KB starting preset for ${spec.platform}.`,
      "Resize dimensions before compression when needed.",
      "Convert JPG, PNG, or WebP in the same workflow.",
      "Private browser-based processing.",
    ],
    benefits: defaultBenefits,
    useCases: spec.useCases,
    faqList: defaultFaqs(`${spec.platform} image compressor`),
    relatedLinks: spec.related,
  };
}

export function buildResizeIntent(spec: ResizeSpec): IntentPage {
  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    heroTitle: spec.heroTitle,
    heroCopy: spec.heroCopy,
    introTitle: `Resize to ${spec.label}`,
    introCopy: spec.introCopy,
    ctaLabel: `Resize to ${spec.label}`,
    toolHref: `/image-resizer?width=${spec.width}&height=${spec.height}`,
    highlights: [
      `${spec.width}×${spec.height} pixel preset ready on open.`,
      "High-quality browser resampling.",
      "Optional compression after resizing.",
      "Works without installing desktop software.",
    ],
    benefits: defaultBenefits,
    useCases: [
      { title: "Profile and avatar images", description: "Match exact pixel requirements for uploads and directories." },
      { title: "Social and content publishing", description: "Prepare visuals that fit platform dimensions without guesswork." },
      { title: "Web and app assets", description: "Export consistent sizes for product pages, banners, and thumbnails." },
    ],
    faqList: [
      { question: `Can I resize an image to ${spec.label}?`, answer: `Yes. This page opens the resizer with ${spec.width}×${spec.height} pixels pre-filled.` },
      { question: "Will resizing reduce file size?", answer: "Usually yes. Smaller dimensions often produce lighter files, and you can compress afterward if needed." },
      { question: "Is this resize tool free?", answer: "Yes. It runs in your browser with no account required." },
    ],
    relatedLinks: spec.related,
  };
}

export const extraExactKbTools: ToolPage[] = [
  buildExactKbTool(10, "Ideal for tiny signatures, icons, and strict upload portals."),
  buildExactKbTool(25, "Useful for portals with limits between 20KB and 30KB."),
  buildExactKbTool(40, "Useful for application forms, ID uploads, and compact profile photos."),
  buildExactKbTool(60, "A practical middle target between 50KB and 80KB upload limits."),
  buildExactKbTool(70, "Strong choice when your form limit sits between 50KB and 80KB."),
  buildExactKbTool(80, "Great for profile photos when you need more detail than 50KB allows."),
  buildExactKbTool(120, "Helpful when portals allow slightly more than 100KB."),
  buildExactKbTool(150, "Helpful for avatars, thumbnails, and lightweight CMS uploads."),
  buildExactKbTool(250, "Ideal for CMS uploads and portals with a 250KB ceiling."),
  buildExactKbTool(500, "Strong choice for e-commerce galleries and content-heavy pages."),
  buildExactKbTool(1024, "Perfect for email attachments, blogs, and portals with a 1MB cap."),
];

export const converterIntentPages: IntentPage[] = [
  buildConverterIntent({
    slug: "jpg-to-png",
    from: "JPG",
    to: "PNG",
    format: "image/png",
    title: "JPG to PNG Converter Online Free | Convert JPEG to PNG",
    description: "Convert JPG to PNG online free. Preserve quality, switch formats instantly, and download PNG files in your browser.",
    heroTitle: "Convert JPG to PNG online in seconds.",
    heroCopy: "Upload a JPG, export PNG, and download the converted file without sending images to a cloud server.",
    introCopy: "PNG is useful when you need a lossless format or plan to edit the image further before publishing.",
    related: [
      { href: "/png-to-jpg", label: "PNG to JPG converter" },
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
      { href: "/image-converter", label: "All image formats" },
    ],
  }),
  buildConverterIntent({
    slug: "webp-to-jpg",
    from: "WebP",
    to: "JPG",
    format: "image/jpeg",
    title: "WebP to JPG Converter Online Free | Convert WebP Images",
    description: "Convert WebP to JPG online free. Make WebP images compatible with email, social platforms, and older upload portals.",
    heroTitle: "Convert WebP to JPG for universal compatibility.",
    heroCopy: "Turn modern WebP files into widely supported JPG images with a fast browser-based converter.",
    introCopy: "Many email clients and legacy upload forms still prefer JPG. This workflow helps you convert quickly before sharing.",
    related: [
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
      { href: "/webp-to-png", label: "WebP to PNG converter" },
      { href: "/compress-image-for-email", label: "Compress for email" },
    ],
  }),
  buildConverterIntent({
    slug: "png-to-webp",
    from: "PNG",
    to: "WebP",
    format: "image/webp",
    title: "PNG to WebP Converter Online Free | Smaller Web Images",
    description: "Convert PNG to WebP online free. Reduce file size for faster websites, blogs, and product galleries.",
    heroTitle: "Convert PNG to WebP and shrink file size.",
    heroCopy: "Export WebP images from PNG sources to improve page speed without rebuilding your assets manually.",
    introCopy: "WebP often delivers smaller files than PNG for web publishing, especially when transparency is not required.",
    related: [
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
      { href: "/compress-image-for-website-upload", label: "Compress for website" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
    ],
  }),
  buildConverterIntent({
    slug: "webp-to-png",
    from: "WebP",
    to: "PNG",
    format: "image/png",
    title: "WebP to PNG Converter Online Free | Convert WebP to PNG",
    description: "Convert WebP to PNG online free. Export WebP images as PNG for editing tools, uploads, and design workflows.",
    heroTitle: "Convert WebP to PNG for editing and sharing.",
    heroCopy: "Switch WebP files to PNG when you need broader software support or lossless editing flexibility.",
    introCopy: "PNG remains a dependable format for design handoffs, screenshots, and workflows that require transparency.",
    related: [
      { href: "/webp-to-jpg", label: "WebP to JPG converter" },
      { href: "/png-to-jpg", label: "PNG to JPG converter" },
      { href: "/image-converter", label: "Image converter hub" },
    ],
  }),
  buildConverterIntent({
    slug: "heic-to-jpg",
    from: "HEIC",
    to: "JPG",
    format: "image/jpeg",
    title: "HEIC to JPG Converter Online Free | Convert iPhone Photos",
    description: "Convert HEIC to JPG online free. Turn iPhone and iPad photos into JPG files for email, websites, and social uploads.",
    heroTitle: "Convert HEIC to JPG from iPhone photos.",
    heroCopy: "Upload HEIC images, convert to JPG in your browser, and download files that work everywhere.",
    introCopy: "HEIC saves space on phones, but many websites and apps still expect JPG. This converter closes that gap instantly.",
    related: [
      { href: "/heic-to-png", label: "HEIC to PNG converter" },
      { href: "/compress-image-for-instagram", label: "Compress for Instagram" },
      { href: "/compress-image-for-email", label: "Compress for email" },
    ],
  }),
  buildConverterIntent({
    slug: "heic-to-png",
    from: "HEIC",
    to: "PNG",
    format: "image/png",
    title: "HEIC to PNG Converter Online Free | Convert Apple Photos",
    description: "Convert HEIC to PNG online free. Export iPhone photos as PNG for editing, design tools, and transparent workflows.",
    heroTitle: "Convert HEIC to PNG without desktop software.",
    heroCopy: "Transform HEIC photos into PNG files directly in the browser when you need a flexible editing format.",
    introCopy: "PNG is a strong choice when you plan to edit iPhone photos or preserve more detail before compression.",
    related: [
      { href: "/heic-to-jpg", label: "HEIC to JPG converter" },
      { href: "/png-to-jpg", label: "PNG to JPG converter" },
      { href: "/image-converter", label: "Image converter hub" },
    ],
  }),
  buildConverterIntent({
    slug: "bmp-to-jpg",
    from: "BMP",
    to: "JPG",
    format: "image/jpeg",
    title: "BMP to JPG Converter Online Free | Reduce BMP File Size",
    description: "Convert BMP to JPG online free. Shrink large bitmap files into lightweight JPG images for web and email use.",
    heroTitle: "Convert BMP to JPG and reduce heavy files.",
    heroCopy: "Turn oversized BMP images into practical JPG files with a simple browser conversion workflow.",
    introCopy: "BMP files are often much larger than necessary. Converting to JPG is one of the fastest ways to make them upload-friendly.",
    related: [
      { href: "/tiff-to-jpg", label: "TIFF to JPG converter" },
      { href: "/png-to-jpg", label: "PNG to JPG converter" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
    ],
  }),
  buildConverterIntent({
    slug: "tiff-to-jpg",
    from: "TIFF",
    to: "JPG",
    format: "image/jpeg",
    title: "TIFF to JPG Converter Online Free | Convert TIFF Images",
    description: "Convert TIFF to JPG online free. Make scanned TIFF files lighter and easier to share by email or upload forms.",
    heroTitle: "Convert TIFF to JPG for sharing and uploads.",
    heroCopy: "Export TIFF scans and photos as JPG when you need a smaller, more compatible file format.",
    introCopy: "TIFF is common in scanning workflows, but JPG is easier to share online. Convert first, then compress if needed.",
    related: [
      { href: "/bmp-to-jpg", label: "BMP to JPG converter" },
      { href: "/compress-image-for-email", label: "Compress for email" },
      { href: "/compress-image-to-500kb", label: "Compress to 500KB" },
    ],
  }),
];

export const platformIntentPages: IntentPage[] = [
  buildPlatformIntent({
    slug: "compress-image-for-instagram",
    platform: "Instagram",
    targetKb: 200,
    format: "image/jpeg",
    title: "Compress Image for Instagram Online Free | Post-Ready Photos",
    description: "Compress image for Instagram online free. Reduce photo size for posts, stories, and reels without losing visual clarity.",
    heroTitle: "Compress images before posting to Instagram.",
    heroCopy: "Prepare lighter JPG or WebP files that upload faster and stay sharp on mobile feeds.",
    introCopy: "Instagram uploads work best with optimized images. Compress first to avoid quality loss from automatic platform compression.",
    useCases: [
      { title: "Feed posts", description: "Keep square and portrait images lightweight before publishing." },
      { title: "Stories and reels", description: "Reduce mobile photo size for faster uploads on cellular data." },
      { title: "Carousel posts", description: "Compress multiple images consistently before scheduling content." },
    ],
    related: [
      { href: "/resize-image-to-1080x1080", label: "Resize to 1080×1080" },
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-facebook",
    platform: "Facebook",
    targetKb: 200,
    format: "image/jpeg",
    title: "Compress Image for Facebook Online Free | Faster Photo Uploads",
    description: "Compress image for Facebook online free. Optimize photos for posts, pages, and ads with smaller file sizes.",
    heroTitle: "Compress images for Facebook posts and pages.",
    heroCopy: "Reduce photo weight before uploading so posts publish faster and look cleaner in the feed.",
    introCopy: "Facebook recompresses uploaded images. Starting with an optimized file gives you more control over the final look.",
    useCases: [
      { title: "Page posts", description: "Prepare banner and announcement images that load quickly." },
      { title: "Marketplace listings", description: "Compress product photos for faster listing creation." },
      { title: "Ad creatives", description: "Export lighter ad images for smoother campaign uploads." },
    ],
    related: [
      { href: "/compress-image-for-instagram", label: "Compress for Instagram" },
      { href: "/resize-image-to-1920x1080", label: "Resize to 1920×1080" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-linkedin",
    platform: "LinkedIn",
    targetKb: 100,
    format: "image/jpeg",
    title: "Compress Image for LinkedIn Online Free | Profile and Post Photos",
    description: "Compress image for LinkedIn online free. Optimize profile photos, banners, and post images for professional uploads.",
    heroTitle: "Compress images for LinkedIn profile and posts.",
    heroCopy: "Prepare sharp, lightweight photos for LinkedIn headers, profile pictures, and article thumbnails.",
    introCopy: "Professional profiles look better with clean, fast-loading images. Compress before upload to avoid platform-side quality loss.",
    useCases: [
      { title: "Profile photos", description: "Keep headshots under common upload limits while staying sharp." },
      { title: "Banner images", description: "Optimize cover photos for faster loading on desktop and mobile." },
      { title: "Article thumbnails", description: "Prepare lightweight preview images for LinkedIn posts and newsletters." },
    ],
    related: [
      { href: "/resize-image-to-400x400", label: "Resize to 400×400" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/background-remover", label: "Background remover" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-twitter",
    platform: "Twitter / X",
    targetKb: 200,
    format: "image/jpeg",
    title: "Compress Image for Twitter Online Free | X Post Images",
    description: "Compress image for Twitter and X online free. Reduce photo size for posts, headers, and social sharing.",
    heroTitle: "Compress images for Twitter and X posts.",
    heroCopy: "Upload lighter images that publish faster and stay readable in timelines on mobile and desktop.",
    introCopy: "Social timelines favor fast-loading media. Compress images first so your posts stay crisp after platform processing.",
    useCases: [
      { title: "Timeline posts", description: "Reduce photo size before sharing updates and announcements." },
      { title: "Header images", description: "Optimize banner visuals for profile branding." },
      { title: "Thread images", description: "Compress multiple images consistently for long-form posts." },
    ],
    related: [
      { href: "/compress-image-for-linkedin", label: "Compress for LinkedIn" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
      { href: "/resize-image-to-1920x1080", label: "Resize to 1920×1080" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-whatsapp",
    platform: "WhatsApp",
    targetKb: 100,
    format: "image/jpeg",
    title: "Compress Image for WhatsApp Online Free | Send Photos Faster",
    description: "Compress image for WhatsApp online free. Reduce photo size so images send faster on mobile data and stay clear.",
    heroTitle: "Compress images before sending on WhatsApp.",
    heroCopy: "Make photos lighter for chats, groups, and status updates without installing a mobile app.",
    introCopy: "Large camera photos can take longer to send on WhatsApp. Compress first to speed up sharing and save data.",
    useCases: [
      { title: "Chat photos", description: "Send lighter images in personal and group conversations." },
      { title: "Status updates", description: "Prepare quick visuals that upload smoothly from mobile browsers." },
      { title: "Document photos", description: "Reduce photo scans before sharing them in work chats." },
    ],
    related: [
      { href: "/resize-image-to-800x800", label: "Resize to 800×800" },
      { href: "/heic-to-jpg", label: "HEIC to JPG converter" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-discord",
    platform: "Discord",
    targetKb: 500,
    format: "image/jpeg",
    title: "Compress Image for Discord Online Free | Avatar and Server Images",
    description: "Compress image for Discord online free. Optimize avatars, banners, and server images for faster uploads.",
    heroTitle: "Compress images for Discord avatars and servers.",
    heroCopy: "Prepare lighter JPG or WebP files for profile photos, emojis, and server branding assets.",
    introCopy: "Discord uploads are smoother with optimized images. Compress first to avoid failed uploads and long wait times.",
    useCases: [
      { title: "Profile avatars", description: "Keep avatar files practical while preserving recognizable detail." },
      { title: "Server banners", description: "Optimize wide banner images for community pages." },
      { title: "Emoji and sticker prep", description: "Reduce image weight before custom asset uploads." },
    ],
    related: [
      { href: "/compress-image-to-500kb", label: "Compress to 500KB" },
      { href: "/resize-image-to-400x400", label: "Resize to 400×400" },
      { href: "/png-to-jpg", label: "PNG to JPG converter" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-shopify",
    platform: "Shopify",
    targetKb: 200,
    format: "image/webp",
    title: "Compress Image for Shopify Online Free | Faster Product Pages",
    description: "Compress image for Shopify online free. Optimize product photos and collection banners for faster store pages.",
    heroTitle: "Compress product images for Shopify stores.",
    heroCopy: "Reduce image weight before uploading to Shopify so product and collection pages load faster worldwide.",
    introCopy: "Store speed affects conversions. Lighter product images help pages load quickly for global shoppers.",
    useCases: [
      { title: "Product photos", description: "Keep gallery images fast without making products look tiny." },
      { title: "Collection banners", description: "Optimize hero visuals for category pages." },
      { title: "Theme assets", description: "Prepare lighter images for custom sections and landing pages." },
    ],
    related: [
      { href: "/compress-image-for-amazon", label: "Compress for Amazon" },
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
      { href: "/bulk-image-compressor", label: "Bulk image compressor" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-wordpress",
    platform: "WordPress",
    targetKb: 200,
    format: "image/webp",
    title: "Compress Image for WordPress Online Free | Faster Blog Images",
    description: "Compress image for WordPress online free. Optimize featured images, thumbnails, and media library uploads.",
    heroTitle: "Compress images before uploading to WordPress.",
    heroCopy: "Prepare WebP or JPG assets that improve page speed scores and reduce hosting bandwidth globally.",
    introCopy: "WordPress sites perform better with optimized media. Compress images before upload to improve Core Web Vitals.",
    useCases: [
      { title: "Featured images", description: "Reduce hero and article images before publishing posts." },
      { title: "Media library cleanup", description: "Prepare lighter replacements for oversized legacy uploads." },
      { title: "Page builder sections", description: "Optimize block and landing-page visuals for faster rendering." },
    ],
    related: [
      { href: "/compress-image-for-website-upload", label: "Compress for website upload" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
      { href: "/png-to-webp", label: "PNG to WebP converter" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-amazon",
    platform: "Amazon",
    targetKb: 500,
    format: "image/jpeg",
    title: "Compress Image for Amazon Online Free | Product Listing Photos",
    description: "Compress image for Amazon online free. Optimize product listing photos for faster uploads and cleaner gallery pages.",
    heroTitle: "Compress product images for Amazon listings.",
    heroCopy: "Reduce photo file size while keeping product detail visible for marketplace uploads.",
    introCopy: "Amazon sellers often manage dozens of product photos. Compression helps uploads go faster and pages stay responsive.",
    useCases: [
      { title: "Main product images", description: "Keep primary listing photos sharp and upload-ready." },
      { title: "Secondary gallery images", description: "Compress entire image sets before bulk upload." },
      { title: "A+ content visuals", description: "Optimize brand story images for lighter page weight." },
    ],
    related: [
      { href: "/compress-image-for-ebay", label: "Compress for eBay" },
      { href: "/compress-image-for-shopify", label: "Compress for Shopify" },
      { href: "/bulk-image-compressor", label: "Bulk image compressor" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-ebay",
    platform: "eBay",
    targetKb: 500,
    format: "image/jpeg",
    title: "Compress Image for eBay Online Free | Listing Photo Optimizer",
    description: "Compress image for eBay online free. Reduce listing photo size for faster uploads and smoother mobile browsing.",
    heroTitle: "Compress listing photos for eBay sellers.",
    heroCopy: "Prepare lighter JPG images for product listings, auction photos, and store branding assets.",
    introCopy: "Buyers browse on mobile worldwide. Optimized listing photos upload faster and help pages feel more responsive.",
    useCases: [
      { title: "Auction photos", description: "Compress camera photos before creating new listings." },
      { title: "Store branding", description: "Optimize banner and profile images for seller pages." },
      { title: "Bulk inventory uploads", description: "Use batch compression for large product catalogs." },
    ],
    related: [
      { href: "/compress-image-for-amazon", label: "Compress for Amazon" },
      { href: "/compress-image-to-500kb", label: "Compress to 500KB" },
      { href: "/bulk-image-compressor", label: "Bulk image compressor" },
    ],
  }),
  buildPlatformIntent({
    slug: "compress-image-for-website",
    platform: "Website",
    targetKb: 200,
    format: "image/webp",
    title: "Compress Image for Website Online Free | Faster Page Speed",
    description: "Compress image for website online free. Reduce JPG, PNG, and WebP files to improve global page speed and SEO.",
    heroTitle: "Compress website images for faster global loading.",
    heroCopy: "Optimize hero images, thumbnails, and content visuals before publishing to any CMS or static site.",
    introCopy: "Page speed matters for SEO and user experience worldwide. Compress images before upload instead of fixing them later.",
    useCases: [
      { title: "Landing pages", description: "Reduce hero and section images for faster first paint." },
      { title: "Blog content", description: "Keep article images lightweight for readers on any connection." },
      { title: "Global audiences", description: "Serve smaller assets to users on mobile data and slower networks." },
    ],
    related: [
      { href: "/compress-image-for-wordpress", label: "Compress for WordPress" },
      { href: "/compress-image-for-website-upload", label: "Website upload workflow" },
      { href: "/jpg-to-webp", label: "JPG to WebP converter" },
    ],
  }),
];

export const resizeIntentPages: IntentPage[] = [
  buildResizeIntent({
    slug: "resize-image-to-200x200",
    width: 200,
    height: 200,
    label: "200×200",
    title: "Resize Image to 200x200 Online Free | Square Avatar Size",
    description: "Resize image to 200x200 pixels online free. Perfect for avatars, favicons, and small profile uploads.",
    heroTitle: "Resize images to 200×200 pixels online.",
    heroCopy: "Set an exact 200×200 square size for avatars, app icons, and compact profile photos.",
    introCopy: "200×200 is a common square size for avatars and thumbnails across forums, apps, and directories.",
    related: [
      { href: "/resize-image-to-400x400", label: "Resize to 400×400" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/image-resizer", label: "Image resizer tool" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-to-400x400",
    width: 400,
    height: 400,
    label: "400×400",
    title: "Resize Image to 400x400 Online Free | Profile Photo Size",
    description: "Resize image to 400x400 pixels online free. Ideal for profile photos, app icons, and social avatars.",
    heroTitle: "Resize images to 400×400 pixels online.",
    heroCopy: "Export a clean 400×400 square image for profile directories, chat apps, and creator platforms.",
    introCopy: "400×400 works well when you need more detail than a tiny avatar but still want a compact square image.",
    related: [
      { href: "/resize-image-to-200x200", label: "Resize to 200×200" },
      { href: "/compress-image-for-linkedin", label: "Compress for LinkedIn" },
      { href: "/image-resizer", label: "Image resizer tool" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-to-1080x1080",
    width: 1080,
    height: 1080,
    label: "1080×1080",
    title: "Resize Image to 1080x1080 Online Free | Instagram Post Size",
    description: "Resize image to 1080x1080 pixels online free. Perfect for Instagram posts, square ads, and social creatives.",
    heroTitle: "Resize images to 1080×1080 for social posts.",
    heroCopy: "Match the classic square social post size before compressing and publishing your content.",
    introCopy: "1080×1080 remains one of the most common square sizes for social posts, ads, and marketplace creatives.",
    related: [
      { href: "/compress-image-for-instagram", label: "Compress for Instagram" },
      { href: "/resize-image-to-1920x1080", label: "Resize to 1920×1080" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-to-1920x1080",
    width: 1920,
    height: 1080,
    label: "1920×1080",
    title: "Resize Image to 1920x1080 Online Free | HD Banner Size",
    description: "Resize image to 1920x1080 pixels online free. Ideal for HD banners, YouTube thumbnails, and widescreen headers.",
    heroTitle: "Resize images to 1920×1080 HD online.",
    heroCopy: "Export widescreen 1080p visuals for website heroes, video thumbnails, and presentation banners.",
    introCopy: "1920×1080 is the standard HD widescreen format for headers, slides, and video preview images.",
    related: [
      { href: "/resize-image-for-youtube-thumbnail", label: "YouTube thumbnail size" },
      { href: "/compress-image-for-website", label: "Compress for website" },
      { href: "/compress-image-to-500kb", label: "Compress to 500KB" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-to-800x800",
    width: 800,
    height: 800,
    label: "800×800",
    title: "Resize Image to 800x800 Online Free | Messaging Photo Size",
    description: "Resize image to 800x800 pixels online free. Useful for messaging apps, product previews, and mobile uploads.",
    heroTitle: "Resize images to 800×800 pixels online.",
    heroCopy: "Create a balanced square image size that works well for messaging apps and mobile sharing.",
    introCopy: "800×800 is a practical middle ground when you want more detail than a small avatar without a huge file.",
    related: [
      { href: "/compress-image-for-whatsapp", label: "Compress for WhatsApp" },
      { href: "/resize-image-to-400x400", label: "Resize to 400×400" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-to-passport-size",
    width: 413,
    height: 531,
    label: "passport size",
    title: "Resize Image to Passport Size Online Free | ID Photo Dimensions",
    description: "Resize image to passport photo size online free. Set standard ID photo dimensions before compression and upload.",
    heroTitle: "Resize images to passport photo dimensions.",
    heroCopy: "Use standard passport-style dimensions, then compress to meet upload size limits for forms and IDs.",
    introCopy: "Many ID and visa workflows require both correct dimensions and a small file size. Resize first, then compress.",
    related: [
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/passport-photo-size-maker", label: "Passport photo workflow" },
    ],
  }),
  buildResizeIntent({
    slug: "resize-image-for-youtube-thumbnail",
    width: 1280,
    height: 720,
    label: "1280×720",
    title: "Resize Image for YouTube Thumbnail Online Free | 1280x720",
    description: "Resize image for YouTube thumbnail online free. Set 1280x720 pixels for crisp video preview images.",
    heroTitle: "Resize images for YouTube thumbnails.",
    heroCopy: "Export 1280×720 thumbnail images that look sharp on search results and mobile feeds.",
    introCopy: "YouTube recommends 1280×720 thumbnails. Resize to the correct ratio first, then compress for faster uploads.",
    related: [
      { href: "/resize-image-to-1920x1080", label: "Resize to 1920×1080" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
      { href: "/compress-image-for-website", label: "Compress for website" },
    ],
  }),
];

type AiToolSpec = {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroCopy: string;
  introCopy: string;
  toolHref: string;
  toolLabel: string;
  related: { href: string; label: string }[];
};

export function buildAiIntent(spec: AiToolSpec): IntentPage {
  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    heroTitle: spec.heroTitle,
    heroCopy: spec.heroCopy,
    introTitle: "Smart browser-based image workflow",
    introCopy: spec.introCopy,
    ctaLabel: `Open ${spec.toolLabel}`,
    toolHref: spec.toolHref,
    highlights: [
      "Runs in your browser — no cloud upload required.",
      "Free to use with no sign-up.",
      "Mobile-friendly for quick photo edits on Android and iPhone.",
      "Pairs with exact-KB compression for SSC, UPSC, and KYC uploads.",
    ],
    benefits: defaultBenefits,
    useCases: [
      {
        title: "Government and exam forms",
        description: "Prepare passport photos, signatures, and ID scans for Indian portal uploads.",
      },
      {
        title: "Social and web publishing",
        description: "Optimize images before Instagram, WhatsApp, LinkedIn, or website upload.",
      },
      {
        title: "Document workflows",
        description: "Clean up scans, signatures, and product photos without desktop software.",
      },
    ],
    faqList: [
      {
        question: `Is this ${spec.toolLabel} free?`,
        answer: "Yes. The tool is free and processes images in your browser without an account.",
      },
      {
        question: "Do you upload my photos to an AI server?",
        answer: "No. Processing happens locally in your browser for better privacy.",
      },
      {
        question: "Does this work on mobile in India?",
        answer: "Yes. You can upload, process, and download from Android or iPhone browsers on mobile data.",
      },
    ],
    relatedLinks: spec.related,
  };
}

export const aiIntentPages: IntentPage[] = [
  buildAiIntent({
    slug: "ai-image-compressor",
    title: "AI Image Compressor Online Free | Smart Photo Size Reducer India",
    description:
      "AI image compressor online free for India. Reduce photo size to 20KB, 50KB, or 100KB for forms, KYC, and portal uploads in your browser.",
    heroTitle: "AI image compressor for exact KB targets.",
    heroCopy:
      "Use smart browser compression to hit 20KB, 50KB, or 100KB limits for government forms, job portals, and document uploads.",
    introCopy:
      "Searchers looking for an AI image compressor usually want fast, accurate file-size reduction without uploading private photos to a cloud server. This workflow compresses locally while still feeling as smart and instant as AI-powered tools.",
    toolHref: "/image-compressor",
    toolLabel: "AI image compressor",
    related: [
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/free-ai-image-compressor", label: "Free AI compressor" },
    ],
  }),
  buildAiIntent({
    slug: "free-ai-image-compressor",
    title: "Free AI Image Compressor Online | No Signup Photo Reducer",
    description:
      "Free AI image compressor online with no signup. Compress JPG, PNG, and WEBP to exact KB sizes for Indian form uploads and mobile sharing.",
    heroTitle: "Free AI-style image compression in your browser.",
    heroCopy:
      "Get AI-like speed and simplicity without paying for credits or creating an account. Compress photos privately on mobile or desktop.",
    introCopy:
      "Many AI photo tools charge per image or require login. ImageFormatConverter offers a free browser workflow that targets exact KB limits used on Indian exam, job, and KYC portals.",
    toolHref: "/image-compressor",
    toolLabel: "free AI image compressor",
    related: [
      { href: "/ai-image-compressor", label: "AI image compressor" },
      { href: "/ai-photo-compressor-online", label: "AI photo compressor" },
      { href: "/compress-image-to-100kb", label: "100KB compressor" },
      { href: "/image-compressor-to-20kb", label: "20KB compressor" },
    ],
  }),
  buildAiIntent({
    slug: "ai-photo-compressor-online",
    title: "AI Photo Compressor Online Free | Compress Photo to KB India",
    description:
      "AI photo compressor online free for India. Reduce photo size to 20KB, 100KB, or custom KB for SSC, UPSC, passport, and signature uploads.",
    heroTitle: "AI photo compressor for Indian upload limits.",
    heroCopy:
      "Compress passport photos, signatures, and profile pictures toward strict KB targets used on government and university portals.",
    introCopy:
      "Photo compressor searches spike before exam registrations and job application deadlines in India. This page connects AI-intent searchers to exact-KB tools that already rank for real upload workflows.",
    toolHref: "/image-compressor",
    toolLabel: "AI photo compressor",
    related: [
      { href: "/compress-image-to-100kb", label: "Photo compressor 100KB" },
      { href: "/image-compressor-to-20kb", label: "Photo compressor 20KB" },
      { href: "/compress-image-for-ssc-form", label: "SSC form compression" },
      { href: "/passport-photo-size-maker", label: "Passport photo size" },
    ],
  }),
  buildAiIntent({
    slug: "ai-background-remover-online",
    title: "AI Background Remover Online Free | Cut Out Photo Background India",
    description:
      "AI background remover online free. Remove photo backgrounds in your browser for passport photos, product shots, and profile pictures.",
    heroTitle: "AI background remover without cloud upload.",
    heroCopy:
      "Cut out subjects from photos locally, then compress to 20KB or 100KB for form uploads and marketplace listings.",
    introCopy:
      "AI background removal is one of the fastest-growing image searches. Pair background cleanup with exact-KB compression for cleaner passport photos and signature scans.",
    toolHref: "/background-remover",
    toolLabel: "AI background remover",
    related: [
      { href: "/image-upscaler", label: "AI image upscaler" },
      { href: "/ai-image-enhancer-online", label: "AI image enhancer" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/passport-photo-size-maker", label: "Passport photo workflow" },
    ],
  }),
  buildAiIntent({
    slug: "ai-image-enhancer-online",
    title: "AI Image Enhancer Online Free | Upscale and Sharpen Photos",
    description:
      "AI image enhancer online free. Upscale and sharpen photos in your browser before compressing for forms, websites, and social uploads.",
    heroTitle: "AI image enhancer and upscaler in one workflow.",
    heroCopy:
      "Increase resolution, apply sharpening, and export enhanced images without desktop software or paid AI credits.",
    introCopy:
      "Users searching for AI image enhancers often need clearer passport photos or product shots before compression. The upscaler runs locally and pairs with KB-target compressors on this site.",
    toolHref: "/image-upscaler",
    toolLabel: "AI image enhancer",
    related: [
      { href: "/ai-background-remover-online", label: "AI background remover" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/background-remover", label: "Background remover tool" },
    ],
  }),
  buildAiIntent({
    slug: "chatgpt-image-compressor-alternative",
    title: "ChatGPT Image Compressor Alternative | Free Online Photo Reducer",
    description:
      "Looking for a ChatGPT image compressor? Use this free browser tool to compress photos to 20KB, 100KB, or custom sizes without AI chat limits.",
    heroTitle: "A practical ChatGPT image compressor alternative.",
    heroCopy:
      "Chat tools are not built for exact KB uploads. Use a dedicated compressor when portals reject oversized JPG or PNG files.",
    introCopy:
      "People search for ChatGPT image compression when they want quick help reducing file size. Dedicated tools give predictable KB output, instant download, and better privacy for ID scans and signatures.",
    toolHref: "/image-compressor",
    toolLabel: "image compressor",
    related: [
      { href: "/ai-image-compressor", label: "AI image compressor" },
      { href: "/compress-image-to-100kb", label: "100KB compressor" },
      { href: "/image-compressor-to-20kb", label: "20KB compressor" },
      { href: "/free-ai-image-compressor", label: "Free AI compressor" },
    ],
  }),
  buildAiIntent({
    slug: "ai-passport-photo-maker",
    title: "AI Passport Photo Maker Online Free | India Form Upload",
    description:
      "AI passport photo maker online free for India. Crop, remove background, and compress passport photos to 20KB or 50KB for government forms.",
    heroTitle: "AI passport photo maker for Indian portals.",
    heroCopy:
      "Prepare passport-size photos with background cleanup and exact KB compression for exam and visa uploads.",
    introCopy:
      "Passport photo makers are heavily searched before SSC, UPSC, and visa deadlines. Pair background removal with 20KB or 50KB compression for portal-ready files.",
    toolHref: "/background-remover",
    toolLabel: "passport photo maker",
    related: [
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/passport-photo-compressor-20kb", label: "Passport photo 20KB" },
      { href: "/ai-background-remover-online", label: "AI background remover" },
    ],
  }),
  buildAiIntent({
    slug: "ai-signature-compressor",
    title: "AI Signature Compressor to 20KB Online Free | Exam Forms India",
    description:
      "AI signature compressor to 20KB online free. Reduce scanned signature size for SSC, UPSC, railway, and university form uploads in India.",
    heroTitle: "AI signature compressor for 20KB upload limits.",
    heroCopy:
      "Compress signature scans toward 20KB with a fast browser workflow built for Indian exam and job portals.",
    introCopy:
      "Signature compression is one of the most urgent tasks before form deadlines. This page connects AI-intent searchers to the proven 20KB signature workflow.",
    toolHref: "/image-compressor-to-20kb",
    toolLabel: "AI signature compressor",
    related: [
      { href: "/signature-compressor-to-20kb", label: "Signature compressor 20KB" },
      { href: "/resize-signature-to-20kb", label: "Resize signature to 20KB" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/ai-image-compressor", label: "AI image compressor" },
    ],
  }),
  buildAiIntent({
    slug: "ai-image-resizer-online",
    title: "AI Image Resizer Online Free | Resize Photo for Forms India",
    description:
      "AI image resizer online free. Resize passport photos, signatures, and profile images to exact pixels for SSC, UPSC, and KYC uploads in India.",
    heroTitle: "AI image resizer for portal dimensions.",
    heroCopy:
      "Set exact width and height before compressing to 20KB, 50KB, or 100KB for government and job portal uploads.",
    introCopy:
      "Many rejected uploads fail on dimensions, not just file size. Resize first, then compress with exact-KB tools on ImageFormatConverter.",
    toolHref: "/image-resizer",
    toolLabel: "AI image resizer",
    related: [
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/passport-photo-size-maker", label: "Passport photo size" },
      { href: "/ai-image-compressor", label: "AI image compressor" },
    ],
  }),
  buildAiIntent({
    slug: "gemini-image-compressor-alternative",
    title: "Gemini Image Compressor Alternative | Free KB Photo Reducer India",
    description:
      "Gemini image compressor alternative for India. Compress photos to 20KB, 50KB, and 100KB free online without AI chat limits or signup.",
    heroTitle: "Free Gemini image compressor alternative.",
    heroCopy:
      "Use a dedicated browser compressor when Gemini or other AI chats cannot output exact KB files for form uploads.",
    introCopy:
      "Users search Gemini for image compression before exam and KYC deadlines. Dedicated tools deliver predictable KB output and instant download.",
    toolHref: "/image-compressor",
    toolLabel: "image compressor",
    related: [
      { href: "/chatgpt-image-compressor-alternative", label: "ChatGPT compressor alternative" },
      { href: "/compress-image-to-100kb", label: "100KB compressor" },
      { href: "/image-compressor-to-20kb", label: "20KB compressor" },
      { href: "/free-ai-image-compressor", label: "Free AI compressor" },
    ],
  }),
  buildAiIntent({
    slug: "ai-photo-enhancer-free-india",
    title: "AI Photo Enhancer Free India | Sharpen & Upscale Online",
    description:
      "AI photo enhancer free for India. Sharpen and upscale passport photos, signatures, and profile images before compressing for form uploads.",
    heroTitle: "Free AI photo enhancer for Indian uploads.",
    heroCopy:
      "Enhance soft phone camera photos before compressing to 20KB, 50KB, or 100KB for SSC, UPSC, and KYC portals.",
    introCopy:
      "Photo enhancer searches spike when users need clearer passport or profile photos. The upscaler runs locally and pairs with KB-target compressors.",
    toolHref: "/image-upscaler",
    toolLabel: "AI photo enhancer",
    related: [
      { href: "/ai-image-enhancer-online", label: "AI image enhancer" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/background-remover", label: "Background remover" },
    ],
  }),
];

export const indiaKeywordIntentPages: IntentPage[] = [
  buildAiIntent({
    slug: "signature-compressor-to-20kb",
    title: "Signature Compressor to 20KB Online Free | Form Upload India",
    description:
      "Signature compressor to 20KB online free. Reduce scanned signature size for SSC, UPSC, railway, and university form uploads in India.",
    heroTitle: "Compress signature to 20KB for form uploads.",
    heroCopy:
      "Trim signature scans to fit strict 20KB limits on government and exam portals without losing readability.",
    introCopy:
      "Signature compressor to 20KB is a high-intent search in India before exam and job deadlines. This page routes users to the proven 20KB compressor workflow.",
    toolHref: "/image-compressor-to-20kb",
    toolLabel: "20KB signature compressor",
    related: [
      { href: "/image-compressor-to-20kb", label: "Image compressor 20KB" },
      { href: "/compress-signature-for-form", label: "Compress signature for form" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/passport-photo-size-maker", label: "Passport photo size" },
    ],
  }),
  buildAiIntent({
    slug: "photo-compressor-to-100kb",
    title: "Photo Compressor to 100KB Online Free | Profile & Form Upload India",
    description:
      "Photo compressor to 100KB online free. Reduce photo size for job portals, KYC, profile pictures, and document attachments in India.",
    heroTitle: "Photo compressor to 100KB for Indian portals.",
    heroCopy:
      "Hit the 100KB target used on job applications, KYC updates, and profile uploads with a fast browser workflow.",
    introCopy:
      "Photo compressor to 100KB is one of the highest-volume searches on ImageFormatConverter. This intent page strengthens internal linking to the main 100KB tool without changing its content.",
    toolHref: "/compress-image-to-100kb",
    toolLabel: "100KB photo compressor",
    related: [
      { href: "/compress-image-to-100kb", label: "Compress image to 100KB" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
      { href: "/webp-compressor-to-100kb", label: "WEBP compressor 100KB" },
    ],
  }),
  buildAiIntent({
    slug: "webp-compressor-to-100kb",
    title: "WEBP Compressor to 100KB Online Free | Optimize WEBP Images",
    description:
      "WEBP compressor to 100KB online free. Reduce WEBP image size for faster websites and portal uploads while keeping good visual quality.",
    heroTitle: "Compress WEBP images to 100KB online.",
    heroCopy:
      "Optimize WEBP photos and graphics toward a 100KB target for modern websites and lightweight uploads.",
    introCopy:
      "WEBP compressor to 100KB searches are growing as more sites adopt WEBP. Use the 100KB preset with WEBP output for predictable results.",
    toolHref: "/compress-image-to-100kb",
    toolLabel: "WEBP 100KB compressor",
    related: [
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/jpg-to-webp", label: "JPG to WEBP converter" },
      { href: "/png-to-webp", label: "PNG to WEBP converter" },
      { href: "/compress-image-for-website", label: "Compress for website" },
    ],
  }),
  buildAiIntent({
    slug: "custom-image-compressor",
    title: "Custom Image Compressor Online Free | Set Any KB Target India",
    description:
      "Custom image compressor online free. Set any target KB size for forms, portals, and uploads that do not match standard 20KB or 100KB presets.",
    heroTitle: "Custom KB image compressor for any upload limit.",
    heroCopy:
      "Enter your own target size when a portal asks for 80KB, 150KB, or another non-standard limit.",
    introCopy:
      "Custom image compressor searches come from users who already know their portal limit. The general compressor handles any KB target with instant preview.",
    toolHref: "/image-compressor",
    toolLabel: "custom image compressor",
    related: [
      { href: "/compress-image-to-80kb", label: "Compress to 80KB" },
      { href: "/compress-image-to-150kb", label: "Compress to 150KB" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
    ],
  }),
  buildAiIntent({
    slug: "photo-compressor-to-50kb",
    title: "Photo Compressor to 50KB Online Free | Exam Form Upload India",
    description:
      "Photo compressor to 50KB online free. Reduce photo size for SSC, UPSC, scholarship, and job application forms in India.",
    heroTitle: "Photo compressor to 50KB for Indian exam forms.",
    heroCopy:
      "Hit the 50KB target used on many state exam and scholarship portals with a fast mobile-friendly workflow.",
    introCopy:
      "Photo compressor to 50KB is a high-volume search before exam registrations. This page links to the dedicated 50KB tool with India-focused guidance.",
    toolHref: "/compress-image-to-50kb",
    toolLabel: "50KB photo compressor",
    related: [
      { href: "/compress-image-to-50kb", label: "Compress image to 50KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/ai-photo-compressor-online", label: "AI photo compressor" },
    ],
  }),
  buildAiIntent({
    slug: "resize-signature-to-20kb",
    title: "Resize Signature to 20KB Online Free | Form Upload India",
    description:
      "Resize signature to 20KB online free. Prepare scanned signatures for SSC, UPSC, railway, and university form uploads in India.",
    heroTitle: "Resize and compress signature to 20KB.",
    heroCopy:
      "Crop empty space, resize dimensions, and compress signature scans to fit strict 20KB portal limits.",
    introCopy:
      "Resize signature to 20KB searches come from users whose scans include too much white space. Resize first, then compress to 20KB.",
    toolHref: "/image-compressor-to-20kb",
    toolLabel: "20KB signature tool",
    related: [
      { href: "/signature-compressor-to-20kb", label: "Signature compressor 20KB" },
      { href: "/ai-signature-compressor", label: "AI signature compressor" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/passport-photo-compressor-20kb", label: "Passport photo 20KB" },
    ],
  }),
  buildAiIntent({
    slug: "passport-photo-compressor-20kb",
    title: "Passport Photo Compressor 20KB Online Free | India Forms",
    description:
      "Passport photo compressor 20KB online free. Reduce passport photo size for government exam, visa, and ID form uploads in India.",
    heroTitle: "Compress passport photo to 20KB online.",
    heroCopy:
      "Prepare passport-size photos that meet strict 20KB limits on Indian government and exam portals.",
    introCopy:
      "Passport photo 20KB is a common requirement on exam and visa forms. Crop to passport dimensions, then use the 20KB preset.",
    toolHref: "/image-compressor-to-20kb",
    toolLabel: "passport photo 20KB compressor",
    related: [
      { href: "/image-compressor-to-20kb", label: "20KB compressor" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/ai-passport-photo-maker", label: "AI passport photo maker" },
      { href: "/passport-photo-size-maker", label: "Passport photo size" },
    ],
  }),
  buildAiIntent({
    slug: "aadhaar-photo-compressor",
    title: "Aadhaar Photo Compressor Online Free | KYC Upload India",
    description:
      "Aadhaar photo compressor online free. Reduce photo size for Aadhaar update, KYC, and UIDAI portal uploads in India.",
    heroTitle: "Compress photo for Aadhaar and KYC uploads.",
    heroCopy:
      "Reduce phone camera photos to 20KB, 50KB, or 100KB for Aadhaar and KYC portals without losing readable detail.",
    introCopy:
      "Aadhaar and KYC updates often reject oversized JPG files from phone cameras. Compress locally before uploading to UIDAI or bank portals.",
    toolHref: "/compress-image-to-100kb",
    toolLabel: "Aadhaar photo compressor",
    related: [
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/pan-card-photo-compressor", label: "PAN card photo compressor" },
      { href: "/ai-image-compressor", label: "AI image compressor" },
    ],
  }),
  buildAiIntent({
    slug: "pan-card-photo-compressor",
    title: "PAN Card Photo Compressor Online Free | NSDL Upload India",
    description:
      "PAN card photo compressor online free. Reduce photo size for PAN application, NSDL, and income tax portal uploads in India.",
    heroTitle: "Compress photo for PAN card application.",
    heroCopy:
      "Prepare passport-style photos for PAN card and NSDL portals with exact KB compression in your browser.",
    introCopy:
      "PAN card applications require small JPG photos with clear facial detail. Compress after cropping to the portal dimensions.",
    toolHref: "/compress-image-to-100kb",
    toolLabel: "PAN card photo compressor",
    related: [
      { href: "/aadhaar-photo-compressor", label: "Aadhaar photo compressor" },
      { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
      { href: "/image-compressor-to-20kb", label: "Compress to 20KB" },
      { href: "/passport-photo-compressor-20kb", label: "Passport photo 20KB" },
    ],
  }),
];

export const pdfIntentPages: IntentPage[] = [
  buildAiIntent({
    slug: "image-to-pdf",
    title: "Image to PDF Converter Online Free | JPG PNG to PDF India",
    description:
      "Convert image to PDF online free. Turn JPG, PNG, and WEBP photos into PDF files for form uploads, documents, and sharing in India.",
    heroTitle: "Convert images to PDF online.",
    heroCopy:
      "Combine photos into PDF format for portals that require document uploads instead of standalone images.",
    introCopy:
      "Many Indian application portals accept PDF attachments after photos are prepared. Convert images first, then compress PDF if needed.",
    toolHref: "/image-converter",
    toolLabel: "image to PDF converter",
    related: [
      { href: "/jpg-to-pdf", label: "JPG to PDF converter" },
      { href: "/compress-image-to-100kb", label: "Compress image to 100KB" },
      { href: "/pdf-to-jpg", label: "PDF to JPG converter" },
      { href: "/image-compressor", label: "Image compressor" },
    ],
  }),
  buildAiIntent({
    slug: "jpg-to-pdf",
    title: "JPG to PDF Converter Online Free | Photo to PDF India",
    description:
      "Convert JPG to PDF online free. Turn JPEG photos into PDF documents for exam forms, job applications, and KYC uploads in India.",
    heroTitle: "Convert JPG photos to PDF online.",
    heroCopy:
      "Export JPG images as PDF files when portals require a single document instead of a raw photo upload.",
    introCopy:
      "JPG to PDF is common for scholarship forms, job applications, and scanned document bundles on Indian portals.",
    toolHref: "/image-converter",
    toolLabel: "JPG to PDF converter",
    related: [
      { href: "/image-to-pdf", label: "Image to PDF" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/pdf-to-jpg", label: "PDF to JPG" },
      { href: "/pdf-compressor-to-200kb", label: "Compress PDF to 200KB" },
    ],
  }),
  buildAiIntent({
    slug: "pdf-to-jpg",
    title: "PDF to JPG Converter Online Free | Extract PDF Pages as Images",
    description:
      "Convert PDF to JPG online free. Extract PDF pages as JPG images for editing, compression, and form re-upload in India.",
    heroTitle: "Convert PDF pages to JPG images.",
    heroCopy:
      "Extract images from PDF files, then compress to 20KB, 50KB, or 100KB for portal submissions.",
    introCopy:
      "PDF to JPG helps when you need to edit or re-compress a scanned document page before uploading to an exam or KYC portal.",
    toolHref: "/image-converter",
    toolLabel: "PDF to JPG converter",
    related: [
      { href: "/pdf-to-png", label: "PDF to PNG" },
      { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
      { href: "/pdf-compressor-to-200kb", label: "Compress PDF 200KB" },
    ],
  }),
  buildAiIntent({
    slug: "pdf-to-png",
    title: "PDF to PNG Converter Online Free | Extract PDF as PNG",
    description:
      "Convert PDF to PNG online free. Extract PDF pages as PNG images for editing and compression workflows in India.",
    heroTitle: "Convert PDF pages to PNG images.",
    heroCopy:
      "Extract PDF content as PNG when you need lossless editing before compressing for upload.",
    introCopy:
      "PDF to PNG is useful for design handoffs and document scans that need further compression or format conversion.",
    toolHref: "/image-converter",
    toolLabel: "PDF to PNG converter",
    related: [
      { href: "/pdf-to-jpg", label: "PDF to JPG" },
      { href: "/png-to-jpg", label: "PNG to JPG" },
      { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
      { href: "/image-to-pdf", label: "Image to PDF" },
    ],
  }),
  buildAiIntent({
    slug: "pdf-compressor-to-200kb",
    title: "PDF Compressor to 200KB Online Free | Reduce PDF Size India",
    description:
      "Compress PDF to 200KB online free. Reduce PDF file size for exam forms, job applications, and document uploads in India.",
    heroTitle: "Compress PDF to 200KB for portal uploads.",
    heroCopy:
      "Reduce PDF documents toward a 200KB target for portals with strict attachment limits.",
    introCopy:
      "PDF compressor to 200KB searches come from users submitting scanned certificates and application bundles on Indian portals.",
    toolHref: "/image-compressor",
    toolLabel: "PDF size reducer",
    related: [
      { href: "/pdf-compressor-to-300kb", label: "Compress PDF to 300KB" },
      { href: "/pdf-compressor-to-500kb", label: "Compress PDF to 500KB" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
      { href: "/compress-image-to-200kb", label: "Compress image to 200KB" },
    ],
  }),
  buildAiIntent({
    slug: "pdf-compressor-to-300kb",
    title: "PDF Compressor to 300KB Online Free | Document Upload India",
    description:
      "Compress PDF to 300KB online free. Reduce PDF size for government forms, scholarships, and application uploads in India.",
    heroTitle: "Compress PDF to 300KB online.",
    heroCopy:
      "Shrink PDF attachments toward 300KB when portals reject larger scanned documents.",
    introCopy:
      "300KB is a common PDF limit on Indian application and scholarship portals. Compress before final submission.",
    toolHref: "/image-compressor",
    toolLabel: "PDF compressor 300KB",
    related: [
      { href: "/pdf-compressor-to-200kb", label: "Compress PDF 200KB" },
      { href: "/pdf-compressor-to-500kb", label: "Compress PDF 500KB" },
      { href: "/compress-image-to-200kb", label: "Compress image 200KB" },
      { href: "/jpg-to-pdf", label: "JPG to PDF" },
    ],
  }),
  buildAiIntent({
    slug: "pdf-compressor-to-500kb",
    title: "PDF Compressor to 500KB Online Free | Large Document Upload",
    description:
      "Compress PDF to 500KB online free. Reduce PDF file size for portals that allow slightly larger document attachments in India.",
    heroTitle: "Compress PDF to 500KB for uploads.",
    heroCopy:
      "Reduce multi-page PDF scans toward 500KB while keeping text readable for verification.",
    introCopy:
      "500KB PDF limits appear on job portals and certificate uploads. Compress scanned documents before attaching.",
    toolHref: "/image-compressor",
    toolLabel: "PDF compressor 500KB",
    related: [
      { href: "/pdf-compressor-to-300kb", label: "Compress PDF 300KB" },
      { href: "/pdf-compressor-to-200kb", label: "Compress PDF 200KB" },
      { href: "/compress-image-to-500kb", label: "Compress image 500KB" },
      { href: "/image-to-pdf", label: "Image to PDF" },
    ],
  }),
];

export const metadataStripperTool: ToolPage = {
  slug: "remove-image-metadata",
  name: "Remove Image Metadata",
  shortName: "Strip EXIF",
  category: "image",
  mode: "converter",
  title: "Remove Image Metadata Online Free | Strip EXIF Data",
  description:
    "Remove image metadata online free. Strip EXIF, GPS, and camera data from JPG and PNG files in your browser for better privacy.",
  keywords: ["remove image metadata", "strip exif data", "remove exif online", "clean image metadata"],
  heroTitle: "Remove EXIF and Metadata from Images",
  heroCopy:
    "Re-export photos without hidden EXIF, GPS, or camera data. Everything stays private in your browser.",
  badge: "Privacy tool",
  featureList: [
    "Strip EXIF and camera metadata",
    "Remove hidden GPS location data",
    "Works with JPG and PNG",
    "Private browser-based export",
  ],
  faqList: [
    {
      question: "Does this remove GPS location from photos?",
      answer: "Yes. Re-exporting through the canvas workflow removes embedded EXIF metadata including GPS when present.",
    },
    {
      question: "Will removing metadata reduce file size?",
      answer: "Sometimes slightly, but the main benefit is privacy and cleaner files for sharing.",
    },
    {
      question: "Is metadata removal done locally?",
      answer: "Yes. Your image is processed in the browser and is not uploaded to a server.",
    },
  ],
};
