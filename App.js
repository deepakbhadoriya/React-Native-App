import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [category, setCategory] = useState();

  return <ListingEditScreen />;
}
