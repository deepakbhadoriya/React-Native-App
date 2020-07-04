import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState();

  return <LoginScreen />;
}
