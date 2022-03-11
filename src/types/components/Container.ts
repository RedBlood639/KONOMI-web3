// types
import { ComponentType } from "react";

// --------------------------------------------------

export interface WithContainerProps extends ColorContainerProps {
  SectionView: ComponentType;
  mode?: "colorContainer" | "container" | "wrapper" | "none";
  mWidth?: string | number;
  className?: string;
  sectionProps?: any;
}

export interface ColorContainerProps {
  cColor?: string;
}
