import React from "react";
import styled from "styled-components";

// @styled component
const LoadingWrapper = styled.div`
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
`;

const Spinner = styled.div`
  border: 15px solid #f3f3f3;
  border-top: 15px solid #3498db;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading;
