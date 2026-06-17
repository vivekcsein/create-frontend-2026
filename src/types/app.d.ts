// Image metadata for logos, icons, etc.
export type ImageProps = {
  id: string;
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export type InputType =
  | "text"
  | "textarea"
  | "email"
  | "password"
  | "number"
  | "decimal"
  | "date"
  | "tel"
  | "url"
  | "select"
  | "multiselect"
  | "radio"
  | "checkbox"
  | "file"
  | "range"
  | "color";
