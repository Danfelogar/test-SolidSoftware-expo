import { createContext } from "react";
import { LanguageState, LightColors, ThemeState } from "../../utils";
import { ColorsProps } from "../../types";

export interface ContextProps {
  //states
  theme: ThemeState;
  currentColors: ColorsProps;
  language: LanguageState;
  //methods
  changeTheme: (theme: ThemeState) => void;
  changeCurrentColors: (colors: ColorsProps) => void;
  changeLanguage: (language: LanguageState) => void;
}

export const ConfigContext = createContext<ContextProps>({} as ContextProps);

export interface ConfigState
  extends Omit<
    ContextProps,
    "changeTheme" | "changeLanguage" | "changeCurrentColors"
  > {}

export const CONFIG_INITIAL_STATE: ConfigState = {
  theme: ThemeState.LIGHT,
  currentColors: LightColors,
  language: LanguageState.EN,
};
