export interface TranferMask {
  isConnect?: boolean;
  isInstall: boolean;
}

export type EtherT = {
  provider: Array<any>;
  web3: any;
  account: string;
};

export type formT = {
  address: string;
  amount: string;
};

export type ModalProps = {
  show?: boolean;
  setShow?: any;
  comment?: boolean;
};
