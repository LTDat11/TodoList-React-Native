import { View, Text, ImageBackground } from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  children: ReactNode;
  color?: string;
}

const CardImageComponent = (props: Props) => {
  let { children, color } = props;
  return (
    <ImageBackground
      source={require("../../assets/images/image.png")}
      imageStyle={{ borderRadius: 12 }}
      style={[globalStyles.card]}
    >
      <View
        style={[
          {
            backgroundColor: color ?? "rgba(113,77,217, 0.9)",
            borderRadius: 12,
            padding: 15,
          },
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageComponent;
