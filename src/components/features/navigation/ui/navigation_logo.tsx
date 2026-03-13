import Link from "next/link";
import Image from "next/image";

interface NavigationImageProps {
  image:
    | {
        src?: string; // Optional source URL for the image
        alt?: string; // Optional alt text for the image
        href?: string; // Optional link to navigate when the logo is clicked
      }
    | string;
  title?: string; // Optional label for the logo
}

const Navigation_logo = ({ image, title }: NavigationImageProps) => {
  let src: string | undefined;
  let alt: string = "Logo";
  let href: string = "/";
  const showLabel = !!title;

  if (typeof image === "object" && image !== null) {
    src = image.src;
    alt = image.alt || alt;
    href = image.href || href;
  } else if (typeof image === "string") {
    src = image;
  }

  return (
    <div className="flex items-center space-x-2">
      <Link className="Header__logo" href={href}>
        {src && <Image_component src={src} alt={alt} />}
        {showLabel && <h3>{title}</h3>}
      </Link>
    </div>
  );
};

export default Navigation_logo;

const Image_component = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={100} height={100} loading="lazy" />
);
