import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={Styles.separator} />;
};

const Styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
