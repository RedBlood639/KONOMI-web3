import { ExampleActions, SET_EXAMPLE } from "./types";

interface ExampleState {
  data: any;
}

const ExampleReducer = (
  state: ExampleState = {
    data: null,
  },
  action: ExampleActions
): ExampleState => {
  switch (action.type) {
    case SET_EXAMPLE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ExampleReducer;
