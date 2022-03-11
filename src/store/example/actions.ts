import { SET_EXAMPLE, ExampleActions } from "./types";
import { Dispatch } from "react";
import { AppState } from "..";
import { AppActions } from "../types";

const FetchExample = (payload: any): ExampleActions => {
  return {
    type: SET_EXAMPLE,
    payload,
  };
};

export const SetExample = (data: any): any => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    console.log("set example data");
    // TODO : dispatch(FetchExample(data)))
  };
};
