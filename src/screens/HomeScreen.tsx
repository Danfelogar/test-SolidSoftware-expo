import { useContext } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { StandardWrapper } from "../components/ui";
import { ConfigContext } from "../context/config/ConfigContext";
import { getTranslation } from "../utils";
import { SettingsState } from "../components";
import { useRandomColor } from "../hooks";

export const HomeScreen = () => {
  const { mainWrapper, title } = styles;
  const {
    //states
    language,
    currentColors,
    //methods
  } = useContext(ConfigContext);
  const {
    //state
    randomColor,
    //methods
    //actions
    getRandomColor,
  } = useRandomColor();
  const t = getTranslation(language);
  return (
    <StandardWrapper>
      <SettingsState />
      {randomColor && (
        <TouchableOpacity
          activeOpacity={0.89}
          onPress={() => {
            getRandomColor();
          }}
          style={[mainWrapper, { backgroundColor: randomColor }]}
        >
          <Text style={[title, { color: currentColors.text }]}>{t.title}</Text>
        </TouchableOpacity>
      )}

      {!randomColor && (
        <View
          style={[mainWrapper, { backgroundColor: currentColors.background }]}
        >
          <ActivityIndicator size="large" color={currentColors.text} />
        </View>
      )}
    </StandardWrapper>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
