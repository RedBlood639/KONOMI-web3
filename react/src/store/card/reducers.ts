import { CardActions, SET_CARDDATA } from "./types";

interface CardState {
  data: any;
}

const CardReducer = (
  state: CardState = {
    data: null,
  },
  action: CardActions
): CardState => {
  switch (action.type) {
    case SET_CARDDATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default CardReducer;
