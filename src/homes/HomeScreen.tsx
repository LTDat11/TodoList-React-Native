
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../components/container'
import { globalStyles } from '../styles/globalStyles'
import RowComponent from '../components/RowComponent'
import SectionCoponent from '../components/SectionCoponent'
import TextComponent from '../components/TextComponent'
import TitleComponent from '../components/TitleComponent'
import { colors } from '../constants/colors'
import CardComponent from '../components/CardComponent'
import { Element4, Notification, SearchNormal } from 'iconsax-react-native'
import TagComponent from '../components/TagComponent'
import SpaceComponent from '../components/SpaceComponent'
import CircularComponent from '../components/CircularComponent'


const HomeScreen = () => {
  return (
    <Container>
        {/* icon left and right */}
        <SectionCoponent>
            <RowComponent justify='space-between'> 
                <Element4 size={24} color={colors.desc} />
                <Notification size={24} color={colors.desc}/>
            </RowComponent>
        </SectionCoponent>
        {/* Name and title */}
        <SectionCoponent>
            <TextComponent text='Hi, there' color={colors.desc}></TextComponent>
            <TitleComponent text='Be Productive today' size={20}></TitleComponent>
        </SectionCoponent>
        {/* button search */}
        <SectionCoponent>
            <RowComponent styles={[globalStyles.inputContainer]} onPress={()=>alert('Search Component')}>
              <TextComponent text='Search Task' color={colors.gray2}></TextComponent>
              <SearchNormal size={24} color={colors.desc}/>
            </RowComponent>
        </SectionCoponent>
        {/* card */}
        <SectionCoponent>
          <CardComponent >
              <RowComponent>
                  <View style={{flex:1}}>
                      <TitleComponent text='Task progress'></TitleComponent>
                      <TextComponent text='30/40 tasks done'></TextComponent>
                      <SpaceComponent height={12}/>
                      <RowComponent justify='flex-start'>
                        <TagComponent text='March 22' onPress={()=>alert('Tag Component')}></TagComponent>
                      </RowComponent>
                  </View>
                  <View>
                      <CircularComponent value={80}></CircularComponent>
                  </View>
              </RowComponent>
          </CardComponent>
        </SectionCoponent>
    </Container>
  )
}

export default HomeScreen