import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';

interface Props{
    text: string,
    size?: number,
    color?: string,
}

const TitleComponent = (props: Props) => {
    let {text,size,color} = props;
  return (
    <TextComponent text={text} size={size ?? 20} color={color}>

    </TextComponent>
  )
}

export default TitleComponent