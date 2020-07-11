import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  return visible ? <LottieView autoPlay loop source={require("../assets/animations/loader.json")} /> : null;
};

export default ActivityIndicator;
