import { View, Text } from "react-native";
import React from "react";
import Container from "./components/container";
import TextComponent from "./components/TextComponent";

const SearchScreen = ({ navigation }: any) => {
  return (
    <Container back title="Search Screen">
      <TextComponent text="Search Screen" />
    </Container>
  );
};

export default SearchScreen;
