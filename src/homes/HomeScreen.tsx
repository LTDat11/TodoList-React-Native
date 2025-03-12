import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../components/container";
import { globalStyles } from "../styles/globalStyles";
import RowComponent from "../components/RowComponent";
import SectionCoponent from "../components/SectionCoponent";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
import { colors } from "../constants/colors";
import CardComponent from "../components/CardComponent";
import {
  Edit2,
  Element4,
  Notification,
  SearchNormal,
} from "iconsax-react-native";
import TagComponent from "../components/TagComponent";
import SpaceComponent from "../components/SpaceComponent";
import CircularComponent from "../components/CircularComponent";
import CardImageComponent from "../components/CardImageComponent";
import AvatarGroup from "../components/AvatarGroup";
import ProgressBarComponent from "../components/ProgressBarComponent";

const HomeScreen = () => {
  return (
    <Container>
      {/* icon left and right */}

      <SectionCoponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
        </RowComponent>
      </SectionCoponent>

      {/* Name and title */}

      <SectionCoponent>
        <TextComponent text="Hi, there" color={colors.desc}></TextComponent>
        <TitleComponent text="Be Productive today" size={20}></TitleComponent>
      </SectionCoponent>

      {/* button search */}

      <SectionCoponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => alert("Search Component")}
        >
          <TextComponent
            text="Search Task"
            color={colors.gray2}
          ></TextComponent>
          <SearchNormal size={24} color={colors.desc} />
        </RowComponent>
      </SectionCoponent>

      {/* card */}

      <SectionCoponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task progress"></TitleComponent>
              <TextComponent text="30/40 tasks done"></TextComponent>
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="March 22"
                  onPress={() => alert("Tag Component")}
                ></TagComponent>
              </RowComponent>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <CircularComponent value={80}></CircularComponent>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionCoponent>

      {/* card grid 2 */}

      <SectionCoponent>
        <RowComponent styles={{ alignItems: "flex-start" }}>
          {/* card 1 */}

          <View style={{ flex: 1 }}>
            <CardImageComponent>
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color="white" />
              </TouchableOpacity>

              <TitleComponent text="UX Design"></TitleComponent>

              <TextComponent text="Task management mobile app"></TextComponent>

              <View style={{ marginVertical: 25 }}>
                <AvatarGroup></AvatarGroup>
                <ProgressBarComponent
                  percent="80%"
                  color="#0AACFF"
                  size="large"
                ></ProgressBarComponent>
              </View>

              <TextComponent
                text="Date day month year"
                size={12}
                color={colors.desc}
              />
            </CardImageComponent>
          </View>
          <SpaceComponent width={16} />

          {/* card 2 */}

          <View style={{ flex: 1 }}>
            <CardImageComponent color="rgba(33,150,243,0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color="white" />
              </TouchableOpacity>

              <TitleComponent text="API Payment"></TitleComponent>

              <SpaceComponent height={8} />
              <AvatarGroup></AvatarGroup>

              <ProgressBarComponent
                percent="40%"
                color="#A2F068"
              ></ProgressBarComponent>
            </CardImageComponent>
            <SpaceComponent height={16} />

            {/* card 3 */}

            <CardImageComponent color="rgba(18,181,22,0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color="white" />
              </TouchableOpacity>

              <TitleComponent text="Update work"></TitleComponent>

              <TextComponent text="Revision home page"></TextComponent>
            </CardImageComponent>
          </View>
        </RowComponent>
      </SectionCoponent>
    </Container>
  );
};

export default HomeScreen;
