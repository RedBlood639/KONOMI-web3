import React from "react";
// styled component
import styled from "styled-components";
// type
type Props = {
  children?: React.ReactNode;
  mWidth?: number | string;
};

// ----------------------------------------------------------
const ContainerWrapper = styled.div<Props>`
  max-width: ${({ mWidth }) =>
    mWidth ? (mWidth === "full" ? mWidth : `${mWidth}px`) : "none"};
  margin: 0 auto;
  position: relative;
`;

const Container: React.FC<Props> = ({ children, mWidth = "full" }) => {
  return <ContainerWrapper mWidth={mWidth}>{children}</ContainerWrapper>;
};

export default Container;
