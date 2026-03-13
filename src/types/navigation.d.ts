// Basic navigation link
export interface Navigation {
  id: string;
  title: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
  permission?: string;
}

// Extended navigation link with nested structure
export interface ExtendedNavigation extends Navigation {
  description?: string;
  subNavigation?: Array<Navigation>;
}

// Header configuration
export interface HeaderConfig {
  logo: ImageProps | string;
  navLinks: Array<ExtendedNavigation>;
}

// Footer configuration
export interface FooterConfig {
  layoutInfo: {
    title: string;
    description: string;
    copyright: string;
    contact?: string;
  };

  logo?: ImageProps | string;
  sections?: string[];

  productLinks?: Array<Navigation>;
  companyLinks?: Array<Navigation>;
  supportLinks?: Array<Navigation>;
  socialLinks?: Array<Navigation>;
  featureLinks?: Array<Navigation>;
}
