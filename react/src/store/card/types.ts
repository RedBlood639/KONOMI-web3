export const SET_CARDDATA = "SET_CARDDATA";

interface setCardAction {
  type: typeof SET_CARDDATA;
  payload: any;
}

export type CardActions = setCardAction;
