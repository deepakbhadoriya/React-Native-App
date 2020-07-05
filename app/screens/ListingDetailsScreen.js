import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
