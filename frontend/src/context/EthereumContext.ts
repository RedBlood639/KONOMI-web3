import { createContext, useContext } from "react";
import { EtherT } from "../types/common";

const initialState: EtherT = {
  provider: [],
  web3: null,
  account: "",
};

export const EthereumContext = createContext(initialState);
export const useEthContext = () => useContext(EthereumContext);
