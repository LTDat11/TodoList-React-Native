import { View, Text, DimensionValue } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import RowComponent from "./RowComponent";
import TextComponent from "./TextComponent";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  size?: "small" | "default" | "large";
  color?: string;
  percent: DimensionValue;
}

const ProgressBarComponent = (props: Props) => {
  let { size, color, percent } = props;

  let heightContent = size === "small" ? 6 : size === "large" ? 10 : 8;
  return (
    <View style={{ marginTop: 12, marginBottom: 16 }}>
      <View
        style={{
          height: heightContent,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",

          borderRadius: 100,
        }}
      >
        <View
          style={{
            backgroundColor: color ?? colors.blue,
            width: percent,
            height: heightContent,
            borderRadius: 100,
          }}
        ></View>
      </View>
      <RowComponent justify="space-between" styles={{ marginTop: 4 }}>
        <TextComponent
          flex={0}
          text="Progress"
          size={13}
          color={colors.desc}
        ></TextComponent>
        <TextComponent
          flex={0}
          text={`${percent}`}
          size={13}
          color={colors.desc}
          styles={{ fontWeight: "bold" }}
        ></TextComponent>
      </RowComponent>
    </View>
  );
};

export default ProgressBarComponent;
