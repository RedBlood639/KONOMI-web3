import { SET_TRANSFER, TransferActions } from "./types";
import { Dispatch } from "react";
import { AppState } from "..";
import { AppActions } from "../types";
import { apiPoint } from "../../utils/apiPoint";

const FetchTransfer = (payload: any): TransferActions => {
  return {
    type: SET_TRANSFER,
    payload,
  };
};

export const setTransfer = (data: any): any => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await apiPoint()
      .get("/transaction/send", { params: data })
      .then((res: Response) => {
        dispatch(FetchTransfer(data));
      })
      .catch((e: Error) => console.log(e));
  };
};
