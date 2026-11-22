import "@/styles/base.css";
import "@/styles/experience.css";
import { profile, seo } from "@/data/profile";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = seo.siteUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  authors: [{ name: profile.name }],
  keywords: seo.keywords,
  icons: { icon: profile.logo, shortcut: profile.logo },
  openGraph: {
    title: seo.title,
    description: seo.shareDescription,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{ url: seo.shareImage, width: 1200, height: 630, alt: `${profile.name} Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.shareDescription,
    images: [seo.shareImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
