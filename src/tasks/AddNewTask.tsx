import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Container from "../components/container";
import TextComponent from "../components/TextComponent";
import { TaskModel } from "../models/TaskModel";
import SectionCoponent from "../components/SectionCoponent";
import InputComponent from "../components/InputComponent";
import { User } from "iconsax-react-native";
import { colors } from "../constants/colors";

const initValue: TaskModel = {
  title: "",
  descriptsion: "",
  dueDate: "",
  start: "",
  end: "",
  uids: [],
  fileUrls: [],
};

const AddNewTask = ({ navigation }: any) => {
  let [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);

  let handleChangeValue = (id: string, value: string) => {
    let item: any = { ...taskDetail };
    item[`${id}`] = value;
    setTaskDetail(item);
  };

  let handelAddNewTask = async () => {
    console.log(taskDetail);
  };

  return (
    <Container back title="Add New Task">
      <SectionCoponent>
        <InputComponent
          value={taskDetail.title}
          onChange={(val) => handleChangeValue("title", val)}
          title="Title"
          allowClear
          placeholder="Title of task"
        />
        <InputComponent
          value={taskDetail.descriptsion}
          onChange={(val) => handleChangeValue("descriptsion", val)}
          title="Description"
          allowClear
          placeholder="Content"
          multible
          numberOfLine={3}
        />
      </SectionCoponent>

      <SectionCoponent>
        <Button title="Save" onPress={handelAddNewTask} />
      </SectionCoponent>
    </Container>
  );
};

export default AddNewTask;
