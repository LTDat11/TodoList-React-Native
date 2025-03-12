import { View, Text, Image } from "react-native";
import React from "react";
import RowComponent from "./RowComponent";
import { colors } from "../constants/colors";
import TextComponent from "./TextComponent";

interface Props {}

const AvatarGroup = (props: Props) => {
  let {} = props;
  let uidsLength = 10;
  let imageURL = `https://img.freepik.com/premium-photo/colorful-chameleon-sits-branch-tropical-jungle_821898-144.jpg`;
  let imageStyles = {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  };
  return (
    <RowComponent justify="flex-start">
      {Array.from({ length: uidsLength }).map(
        (item, index) =>
          index < 3 && (
            <Image
              source={{ uri: imageURL }}
              key={`image${index}`}
              style={[imageStyles, { marginLeft: index > 0 ? -10 : 0 }]}
            />
          )
      )}

      {uidsLength > 5 && (
        <View
          style={[
            imageStyles,
            {
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              marginLeft: -10,
            },
          ]}
        >
          <TextComponent
            flex={0}
            styles={{ lineHeight: 20 }}
            text={`+${uidsLength - 3 > 9 ? 9 : uidsLength - 3}`}
            color="black"
          ></TextComponent>
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroup;
