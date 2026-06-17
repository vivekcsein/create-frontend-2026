import {
  Geist,
  Inter,
  Manrope,
  Space_Grotesk,
  Instrument_Serif,
  IBM_Plex_Sans,
} from "next/font/google";

export type FontRole = "ui" | "premium" | "technical" | "editorial" | "enterprise";

export interface FontMeta {
  role: FontRole;
  family: string;
  variable: string;
  category: "sans" | "serif";
}

// UI
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Premium
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Technical
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Enterprise
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

// Editorial
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const fonts: FontMeta[] = [
  {
    role: "ui",
    family: "Inter",
    variable: inter.variable,
    category: "sans",
  },
  {
    role: "premium",
    family: "Manrope",
    variable: manrope.variable,
    category: "sans",
  },
  {
    role: "technical",
    family: "Space Grotesk",
    variable: spaceGrotesk.variable,
    category: "sans",
  },
  {
    role: "enterprise",
    family: "IBM Plex Sans",
    variable: ibmPlexSans.variable,
    category: "sans",
  },
  {
    role: "editorial",
    family: "Instrument Serif",
    variable: instrumentSerif.variable,
    category: "serif",
  },
  {
    role: "ui",
    family: "Geist",
    variable: geist.variable,
    category: "sans",
  },
];

export const DESIGN_LANGUAGE = {
  MINIMAL: {
    heading: "Geist",
    body: "Inter",
  },

  EDITORIAL: {
    heading: "Instrument Serif",
    body: "Inter",
  },

  LUXURY: {
    heading: "Instrument Serif",
    body: "Manrope",
  },

  TECHNICAL: {
    heading: "Space Grotesk",
    body: "IBM Plex Sans",
  },

  ENTERPRISE: {
    heading: "Inter",
    body: "Inter",
  },
} as const;

export type DesignLanguage = keyof typeof DESIGN_LANGUAGE;
