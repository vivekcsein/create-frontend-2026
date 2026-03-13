import { Metadata } from "next";
import { envAppConfig as env } from "../env/env.app";

const baseUrl = `https://${env.APP_HOST}`;

const title = `${env.APP_NAME}`;
const description =
  "Transform your business with our powerful SaaS platform. Scale faster, automate workflows, and grow your product globally.";
const keywords = [
  "SaaS platform",
  "business automation",
  "startup tools",
  "modern SaaS",
  "Next.js SaaS template",
];

export const appMetadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },

  description: description,
  keywords: keywords,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: baseUrl,
    title: title,
    description: description,
    siteName: env.APP_NAME,

    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${env.APP_NAME} platform`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${baseUrl}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
