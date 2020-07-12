import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  netInfo.type !== "unknown" && netInfo.isInternetReachable === false && (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
