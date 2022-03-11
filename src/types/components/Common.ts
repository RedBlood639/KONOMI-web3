export interface InitialProps {
  padding?: string;
  fSize?: number;
  fWeight?: number;
  fColor?: string;
  tAlign?: "center" | "left" | "right";
  tFont?: "base" | "changa" | "roboto" | "noto" | "exodemibold";
  display?: string;
  tTransForm?: "uppercase" | "lowercase" | "capitalize" | "none";
  mWidth?: number;
  zIndex?: number;
  className?: string;
  cursor?: string;
  [key: string]: unknown;
}
