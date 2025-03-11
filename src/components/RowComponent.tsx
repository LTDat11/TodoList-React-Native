import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props{
    children: ReactNode;
    justify? : "center" | 
    "space-between" | 
    "flex-start" | 
    "flex-end" | 
    "space-around" | 
    "space-evenly" | 
    undefined;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>
}

const RowComponent = (props: Props) => {
  let {children, justify, onPress, styles} = props;
  let localStyles = [
      globalStyles.row,
      {
        justifyContent: justify ?? 'center' 
      },
      styles,
    ];
  return onPress ? (
    <TouchableOpacity style={localStyles} onPress={ onPress ? () => onPress() : undefined }>{children}</TouchableOpacity>
  ) : (
    <View style={localStyles}>
      {children}
    </View>
  )
}

export default RowComponent