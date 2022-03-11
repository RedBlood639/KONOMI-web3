// types
import { ReactNode } from "react";
import { InitialProps } from "./Common";

export interface TextWrapperProps extends InitialProps {
  mode?: "span" | "p";
  tSpacing?: number;
  lHeight?: number;
  tDecorations?: "line-through" | "initial" | "underline";
  children?: ReactNode;
}
export interface ResponsivedTextProps extends TextWrapperProps {
  responsive?: { [key: number]: TextWrapperProps };
  hoverStyle?: TextWrapperProps;
}
