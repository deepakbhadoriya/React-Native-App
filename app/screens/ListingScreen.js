import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

import listingsApi from "../api/listing";

const ListingScreen = ({ navigation }) => {
  const [listing, setListings] = useState([]);

  const loadListing = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListing();
  });
  return (
    <Screen style={styles.Screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  Screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
