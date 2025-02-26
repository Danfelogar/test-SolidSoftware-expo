import { FC, useContext, useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ConfigContext } from "../../context/config/ConfigContext";

interface CustomSwitchProps {
  title: string;
  initialValue: boolean;
  onChange: (value: boolean) => void;
}

export const SwitchSetting: FC<CustomSwitchProps> = ({
  title,
  initialValue,
  onChange,
}) => {
  const {
    //states
    currentColors,
    //methods
  } = useContext(ConfigContext);
  const { container, labelText } = styles;
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <View style={container}>
      <Text style={[labelText, { color: currentColors.text }]}>{title}</Text>
      <Switch
        trackColor={{ false: currentColors.danger, true: currentColors.gray }}
        thumbColor={isEnabled ? currentColors.primary : currentColors.neutral}
        ios_backgroundColor={currentColors.danger}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "semibold",
  },
});
