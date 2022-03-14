import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { NoMaskSection, TransferSection } from "../section";
import _ from "lodash";
// @web3
import Web3 from "web3";
import { EthereumContext } from "../context/EthereumContext";

const TransferPage: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [provider, setProvider] = useState<any>(null);
  const [web3, setWeb3] = useState<any>(null);
  const [isMetaMask, setIsMetaMask] = useState<boolean>(false);

  useEffect(() => {
    handleEthereum();
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      await window.ethereum.enable();
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      }
    };
    if (!_.isNull(web3)) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  // @event : handle metamask
  const handleEthereum = () => {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      setIsMetaMask(true);
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
    } else {
      setIsMetaMask(false);
    }
  };

  return (
    <EthereumContext.Provider
      value={{
        provider,
        web3,
        account,
      }}
    >
      <Box
        safeArea
        w="90%"
        p={"10"}
        maxWidth="290"
        borderRadius={8}
        background="white"
        shadow={"9"}
      >
        {isMetaMask && !_.isEmpty(account) ? (
          <TransferSection isInstall={isMetaMask} />
        ) : (
          <NoMaskSection
            isInstall={isMetaMask}
            isConnect={_.isEmpty(account)}
          />
        )}
      </Box>
    </EthereumContext.Provider>
  );
};

export default TransferPage;
