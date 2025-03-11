import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import TextComponent from './TextComponent';
import { colors } from '../constants/colors';

interface Props{
    text: string,
    color?: string,
    tagStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void,
}

const TagComponent = (props: Props) => {
    let {text,color,tagStyle,textStyle,onPress} = props;
  return (
    <TouchableOpacity 
        style={[globalStyles.tag, tagStyle, {backgroundColor:color ?? colors.blue}]} 
        onPress={onPress}
        disabled={!onPress}
        >
        <TextComponent text={text} styles={textStyle}></TextComponent>
    </TouchableOpacity>
  )
}

export default TagComponent