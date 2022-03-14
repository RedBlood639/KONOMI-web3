import { SET_CARDDATA, CardActions } from "./types";
import { Dispatch } from "react";
import { AppState } from "..";
import { AppActions } from "../types";

import { Server } from "miragejs";
import { cardData } from "data/data";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/get/", () => {
      return cardData;
    });
  },
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FetchCardData = (payload: any): CardActions => {
  return {
    type: SET_CARDDATA,
    payload,
  };
};

export const getData = (): any => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await sleep(2500);
    const data = await fetch("/api/get/")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        return json;
      });
    dispatch(FetchCardData(data));
    return true;
  };
};
