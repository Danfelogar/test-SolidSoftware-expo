import { ColorsProps } from "../../types";
import { LanguageState, ThemeState } from "../../utils";
import { ConfigState } from "./ConfigContext";

type ConfigActionType =
  | {
      type: "SET_THEME";
      payload: ThemeState;
    }
  | {
      type: "SET_LANGUAGE";
      payload: LanguageState;
    }
  | {
      type: "SET_CURRENT_COLORS";
      payload: ColorsProps;
    };

export const ConfigReducer = (state: ConfigState, action: ConfigActionType) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    case "SET_CURRENT_COLORS":
      return {
        ...state,
        currentColors: action.payload,
      };
    default:
      return state;
  }
};
