import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import TitleComponent from "./TitleComponent";
import RowComponent from "./RowComponent";
import { TextInput } from "react-native";
import { colors } from "../constants/colors";
import { globalStyles } from "../styles/globalStyles";
import { CloseSquare, ExternalDrive } from "iconsax-react-native";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  title?: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  multible?: boolean;
  numberOfLine?: number;
}

const InputComponent = (props: Props) => {
  let {
    value,
    onChange,
    placeholder,
    affix,
    allowClear,
    prefix,
    title,
    numberOfLine,
    multible,
  } = props;
  return (
    <View style={{ marginBottom: 16 }}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multible && numberOfLine ? 32 * numberOfLine : 32,
            paddingVertical: 14,
            paddingHorizontal: 10,
            alignItems: "flex-start",
          },
        ]}
      >
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: affix ? 8 : 0,
          }}
        >
          <TextInput
            style={[
              globalStyles.text,
              {
                margin: 0,
                padding: 0,
                paddingVertical: 6,
                flex: 1,
              },
            ]}
            placeholder={placeholder ?? ""}
            placeholderTextColor={"#676767"}
            value={value}
            cursorColor={"#676767"}
            onChangeText={(val) => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLine}
          ></TextInput>
        </View>
        {affix && affix}
        {allowClear && value && (
          <TouchableOpacity onPress={() => onChange("")}>
            <CloseSquare size={20} color="white" />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
