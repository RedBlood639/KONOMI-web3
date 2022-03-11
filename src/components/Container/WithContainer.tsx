import React from "react";
// component
import { Container, ColorContainer, ContainerWrapper } from "./index";

// types
import { WithContainerProps } from "../../types/components/Container";

// -------------------------------------------------------------
const WithContainer = ({
  cColor,
  SectionView,
  mWidth,
  mode = "colorContainer",
  className = "",
  sectionProps,
  ...props
}: WithContainerProps) => {
  if (mode === "colorContainer") {
    return (
      <ColorContainer cColor={cColor} className={className}>
        <Container>
          <SectionView {...sectionProps} />
        </Container>
      </ColorContainer>
    );
  }
  if (mode === "container") {
    return (
      <Container>
        <SectionView {...sectionProps} />
      </Container>
    );
  }
  if (mode === "wrapper") {
    return (
      <ColorContainer cColor={cColor} className={className}>
        <ContainerWrapper mWidth={mWidth}>
          <SectionView {...sectionProps} />
        </ContainerWrapper>
      </ColorContainer>
    );
  }
  if (mode === "none") {
    return <SectionView {...sectionProps} />;
  }
  return <></>;
};

export default WithContainer;
