import React from "react";
import { FlatList } from "react-native";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  return <FlatList data={} />;
};

export default MessageScreen;
