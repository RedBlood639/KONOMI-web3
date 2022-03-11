// styled system
import styled from "styled-components";
// types
import { ResponsivedTextProps } from "../../types/components/Text";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------------
export const TextWrapper = styled.p<ResponsivedTextProps>`
  ${({ wSpace }) => (wSpace ? `white-space: nowrap` : "wrap")};
  ${({ fSize }) => (fSize ? `font-size: ${fSize}rem` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ tTransForm }) => (tTransForm ? ` text-transform: ${tTransForm}` : "")};
  ${({ lHeight }) => (lHeight ? `line-height: ${lHeight}px` : "")};
  ${({ tSpacing }) => (tSpacing ? `letter-spacing: ${tSpacing}px` : "")};
  ${({ mWidth }) => (mWidth ? `max-width: ${mWidth}px` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")};
  color: ${({ fColor }) => themeGet(`colors.${fColor}`)};
  // font-family: ${({ tFont }) => themeGet(`fonts.${tFont}`, "")};
  font-family: "HeyWow";
  ${({ tDecorations }) =>
    tDecorations ? `text-decoration: ${tDecorations}` : ""};
  ${({ responsive }) => responsive && getResponsive(responsive)}
  &:hover {
    color: ${({ hoverStyle }) => themeGet(`colors.${hoverStyle?.fColor}`)};
    font-weight: ${({ hoverStyle }) =>
      themeGet("font-weight", `${hoverStyle?.hfWeight}`)};
  }
`;

export const TextSpanWrapper = styled.span<ResponsivedTextProps>`
  ${({ wSpace }) => (wSpace ? `white-space: nowrap` : "wrap")};
  ${({ fSize }) => (fSize ? `font-size: ${fSize}rem` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ tTransForm }) => (tTransForm ? ` text-transform: ${tTransForm}` : "")};
  ${({ lHeight }) => (lHeight ? `line-height: ${lHeight}px` : "")};
  ${({ tSpacing }) => (tSpacing ? `letter-spacing: ${tSpacing}px` : "")};
  ${({ mWidth }) => (mWidth ? `max-width: ${mWidth}px` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")};
  ${({ tDecorations }) =>
    tDecorations ? `text-decoration: ${tDecorations}` : ""};
  color: ${({ fColor }) => themeGet(`colors.${fColor}`)};
  font-family: ${({ tFont }) => themeGet(`fonts.${tFont}`, "")};
  ${({ responsive }) => responsive && getResponsive(responsive)}
  &:hover {
    color: ${({ hoverStyle }) => themeGet(`colors.${hoverStyle?.fColor}`)};
    font-weight: ${({ hoverStyle }) =>
      themeGet("font-weight", `${hoverStyle?.hfWeight}`)};
  }
`;

// func getter for responsive
const getResponsive = (responsive: any) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.fSize ? `font-size: ${item.fSize}rem;` : ""}
      ${item.fWeight ? `font-weight: ${item.fWeight};` : ""}
      ${item.tAlign ? `text-align: ${item.tAlign};` : ""}
      ${item.lHeight ? `line-height: ${item.lHeight}px;` : ""}
      ${item.tTransForm ? ` text-transform: ${item.tTransForm};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.tSpacing ? `letter-spacing: ${item.tSpacing}px;` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${item.tDecorations ? `text-decoration: ${item.tDecorations};` : ""}
    }`;
  });
  return resStyle;
};
