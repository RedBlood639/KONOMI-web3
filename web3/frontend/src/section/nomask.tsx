import React from "react";
import { Heading, PresenceTransition } from "native-base";
import { TranferMask } from "../types/common";

const NoMask: React.FC<TranferMask> = ({ isInstall, isConnect }) => {
  return (
    <PresenceTransition
      visible={isInstall && !isConnect}
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
        transition: {
          duration: 250,
        },
      }}
    >
      <Heading size={"md"} whiteSpace={"nowrap"}>
        {isInstall || !isConnect
          ? "Please Connect Account"
          : "Please Install MetaMask"}
      </Heading>
    </PresenceTransition>
  );
};

export default NoMask;
