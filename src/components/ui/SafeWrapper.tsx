import { ReactNode, useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { ConfigContext } from "../../context/config/ConfigContext";
import { ThemeState } from "../../utils";

export const StandardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const {
    //states
    currentColors,
    theme,
    //methods
  } = useContext(ConfigContext);
  const { containerStandardWrapper, safeAreaContent, childContainer } = styles;
  return (
    <View style={containerStandardWrapper}>
      <SafeAreaView
        style={{
          ...safeAreaContent,
          backgroundColor: currentColors.background,
        }}
      >
        <StatusBar
          backgroundColor={currentColors.background}
          showHideTransition="slide"
          barStyle={
            theme === ThemeState.DARK ? "light-content" : "dark-content"
          }
        />
        <View style={childContainer}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStandardWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  safeAreaContent: {
    flex: 1,
  },
  childContainer: {
    width: "100%",
    height: "100%",
  },
});
