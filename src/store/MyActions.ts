import type { Action } from "redux";

export type SetThemeAction = Action<"setTheme"> & {
  theme: Boolean;
};

export type MyActions = SetThemeAction;