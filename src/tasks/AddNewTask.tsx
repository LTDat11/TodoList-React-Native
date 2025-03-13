import { View, Text } from "react-native";
import React from "react";
import Container from "../components/container";
import TextComponent from "../components/TextComponent";

const AddNewTask = () => {
  return (
    <Container back title="Add New Task">
      <TextComponent text="Add New Task"></TextComponent>
    </Container>
  );
};

export default AddNewTask;
