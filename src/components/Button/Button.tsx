import React, { Fragment } from "react";
// styled component
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

// type
import {
  ButtonContainerProps,
  ButtonItemProps,
  StyledProps,
} from "../../types/components/Button";

type Ref = HTMLButtonElement;
// ----------------------------------------------------

const StyledButton = styled.button(
  (props: StyledProps) =>
    css({
      margin: "0 5px",
      px: "20px",
      py: "20px",
      fontSize: "regular",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    zIndex: 15,
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    height: "38px",
    textDecoration: "none",
    borderRadius: "5px",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transform: "scale(0.98)",
      backgroundColor: "#333333",
    },
  },
  variant({
    variants: {
      default: {
        color: "white",
        bg: "transparent",
        border: "solid white 1px",
        "&:hover": {
          borderColor: "gray.100",
          color: "gray.100",
        },
      },
      /** TODO: set primary as red */
      primary: {
        color: "white",
        bg: "transparent",
        border: "solid white 1px",
        "&:hover": {
          borderColor: "gray.100",
          color: "gray.100",
        },
      },
      _primary: {
        color: "white",
        bg: "red.100",
        border: "none",
        "&:hover": { bg: "red.hover" },
      },
      gray: {
        color: "white",
        bg: "gray.300",
        border: "none",
      },
      outlined: {
        color: "white",
        border: `1px solid white`,
        borderRadius: "20px",
        bg: "transparent",
        "&:hover": { bg: "white", color: "red.regular" },
      },
      warning: {
        color: "white",
        bg: "red.100",
        border: "none",
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      big: {
        height: "58px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      normal: { borderRadius: 0, height: "42px", width: "150px", fontSize: 12 },
      medium: { height: "42px", fontSize: 16, px: 10, py: 10 },
      small: { height: "33px", fontSize: 16, px: 12, py: 10 },
    },
  }),
  compose(border, space, layout)
);

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid ${themeGet("primary.regular", "#009E7F")};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;
// eslint-disable-next-line react/display-name
const Button = React.forwardRef<Ref, ButtonItemProps>(
  ({ children, disabled, icon, loading = false, ...props }, ref) => {
    const buttonIcon = icon || Fragment;
    return (
      <StyledButton
        type="button"
        ref={ref}
        {...props}
        disabled={disabled}
        aria-label="warehouse"
      >
        <ButtonInner>
          {loading && <Spinner />}
          {!loading && buttonIcon}
          <div>{children}</div>
        </ButtonInner>
      </StyledButton>
    );
  }
);

// eslint-disable-next-line react/display-name
const ButtonContainer = React.forwardRef<Ref, ButtonContainerProps>(
  ({ children, bColor = "default", bSize = "small", ...props }, ref) => (
    <Button ref={ref} variant={bColor} size={bSize} {...props}>
      {children}
    </Button>
  )
);

export default ButtonContainer;
