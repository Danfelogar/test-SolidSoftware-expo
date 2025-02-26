import { View, Text, StyleSheet } from "react-native";
import { SwitchSetting } from "../ui";
import { useContext } from "react";
import { ConfigContext } from "../../context/config/ConfigContext";
import { getTranslation, LanguageState, ThemeState } from "../../utils";

export const SettingsState = () => {
  const {
    //states
    language,
    theme,
    currentColors,
    //methods
    changeLanguage,
    changeTheme,
  } = useContext(ConfigContext);
  const t = getTranslation(language);

  return (
    <View style={styles.container}>
      <SwitchSetting
        title={t.labelTheme}
        initialValue={theme === ThemeState.LIGHT}
        onChange={(val: boolean) => {
          changeTheme(val ? ThemeState.LIGHT : ThemeState.DARK);
        }}
      />
      <SwitchSetting
        title={t.labelLanguage}
        initialValue={language === LanguageState.EN}
        onChange={(val: boolean) => {
          changeLanguage(val ? LanguageState.EN : LanguageState.ES);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
});
