import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../homes/HomeScreen";
import AddNewTask from "../tasks/AddNewTask";
import SearchScreen from "../SearchScreen";

const Router = () => {
  let Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="AddNewTask" component={AddNewTask}></Stack.Screen>
      <Stack.Screen name="SearchScreen" component={SearchScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
