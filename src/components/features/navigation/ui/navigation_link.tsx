import React from "react";
import Link from "next/link";
import { Navigation } from "@/types/navigation";

// Props for rendering a single navigation link
export interface NavigationProps {
  link: Navigation;
  isActive?: boolean;
  bottomBorder?: boolean;
  onClick?: (link: Navigation) => void;
  isMobile?: boolean;
  fontSize?: string;
}

const Navigation_link: React.FC<NavigationProps & { style?: React.CSSProperties }> = ({
  link,
  isActive,
  fontSize = "1rem",
  bottomBorder = true,
}) => {
  return (
    <Link
      key={link.id}
      href={link.href}
      style={{ fontSize: fontSize }}
      className={`group/link text-foreground hover:text-primary relative w-fit font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-muted-foreground"}`}
    >
      {link.title}
      {bottomBorder && (
        <span
          className={`bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover/link:left-0 group-hover/link:w-full ${isActive ? "bg-primary left-0 w-full" : "left-0 w-0"} `}
        ></span>
      )}
    </Link>
  );
};

export default Navigation_link;
