import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

interface Props{
    text: string,
    size?: number,
    color?: string,
    flex?: number,
    styles?: StyleProp<TextStyle>
}

const TextComponent = (props: Props) => {
    let {text, size, color,flex,styles} = props;
  return (
    <Text style={[globalStyles.text, {
        flex: flex ?? 1,
        fontSize: size ?? 14,
        color: color ?? colors.text,
    },styles]}>
        {text}
    </Text>
  )
}

export default TextComponent