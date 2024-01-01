import type { MyState } from "./MyState";
import type { MyActions } from "./MyActions";

const initialAppState = {
  theme: false,
};
export const rootReducer = (
  state: MyState = initialAppState,
  action: MyActions
) => {
  switch (action.type) {
		// Action에 적어둔 문자열로 구분
    case "setTheme": {
      return { ...state, theme: action.theme };
    }
  }
  return state;
};