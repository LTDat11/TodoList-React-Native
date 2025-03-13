import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import RowComponent from "./RowComponent";
import { ArrowLeft2 } from "iconsax-react-native";
import { colors } from "../constants/colors";
import TextComponent from "./TextComponent";

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}

let Container = (props: Props) => {
  let { title, back, right, children } = props;
  let navigation: any = useNavigation();
  return (
    <View style={[globalStyles.container]}>
      {/* Header */}
      <RowComponent
        styles={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ zIndex: 1 }}
          >
            <ArrowLeft2 size={24} color={colors.text} />
          </TouchableOpacity>
        )}
        <View style={{ flex: 1 }}>
          {title && (
            <TextComponent
              text={title}
              flex={0}
              size={16}
              styles={{ textAlign: "center", marginLeft: back ? -24 : 0 }}
            ></TextComponent>
          )}
        </View>
      </RowComponent>
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
    </View>
  );
};

export default Container;
