export const SET_EXAMPLE = "SET_EXAMPLE";

interface setExampleAction {
  type: typeof SET_EXAMPLE;
  payload: any;
}

export type ExampleActions = setExampleAction;
