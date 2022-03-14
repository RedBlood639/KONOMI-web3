export const SET_TRANSFER = "SET_TRANSFER";

interface setTransferAction {
  type: typeof SET_TRANSFER;
  payload: any;
}

export type TransferActions = setTransferAction;
