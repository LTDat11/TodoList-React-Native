import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Porps {
    children: ReactNode,
}

const SectionCoponent = (props: Porps) => {
    let {children} = props;
  return (
    <View style={[globalStyles.section]}>
      {children}
    </View>
  )
}

export default SectionCoponent