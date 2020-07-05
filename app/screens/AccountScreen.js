import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Mosh Hamedani" subTitle="Most@gmail.com" image={require("../assets/mosh.jpg")} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            />
          )}
        />
      </View>
      <ListItem title="Log out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 20,
  },
});

export default AccountScreen;
