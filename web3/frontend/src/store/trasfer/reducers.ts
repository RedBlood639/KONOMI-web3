import { TransferActions, SET_TRANSFER } from "./types";

interface TransferState {
  data: any;
}

const ExampleReducer = (
  state: TransferState = {
    data: null,
  },
  action: TransferActions
): TransferState => {
  switch (action.type) {
    case SET_TRANSFER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ExampleReducer;
