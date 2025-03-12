import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { colors } from "../constants/colors";
interface Props {
  color?: string;
  value: number;
  maxValue?: number;
  radius?: number;
}

const CircularComponent = (props: Props) => {
  let { color, value, maxValue, radius } = props;
  return (
    <CircularProgress
      value={value}
      showProgressValue={false}
      activeStrokeColor={color ?? "#3618e0b3"}
      inActiveStrokeColor="#3C444A"
      title={`${value}%`}
      titleFontSize={22}
      titleColor={"white"}
      radius={radius ?? 35}
    ></CircularProgress>
  );
};

export default CircularComponent;
