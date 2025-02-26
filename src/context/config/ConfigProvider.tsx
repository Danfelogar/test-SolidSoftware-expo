import { FC, ReactNode, useEffect, useReducer } from "react";
import { ConfigReducer } from "./ConfigReducer";
import { CONFIG_INITIAL_STATE, ConfigContext } from "./ConfigContext";
import {
  DarkColors,
  LanguageState,
  LightColors,
  ThemeState,
} from "../../utils";
import { ColorsProps } from "../../types";

interface Props {
  children: ReactNode;
}

export const ConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ConfigReducer, CONFIG_INITIAL_STATE);

  useEffect(() => {
    changeCurrentColors(
      state.theme === ThemeState.LIGHT ? LightColors : DarkColors
    );
  }, [state.theme]);

  const changeTheme = (theme: ThemeState) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const changeLanguage = (language: LanguageState) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
  };

  const changeCurrentColors = (colors: ColorsProps) => {
    dispatch({ type: "SET_CURRENT_COLORS", payload: colors });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...state,
        //methods
        changeTheme,
        changeLanguage,
        changeCurrentColors,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
