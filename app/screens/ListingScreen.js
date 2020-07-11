import React, { useState, useEffect, Fragment } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Button from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";

import listingsApi from "../api/listing";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const { data: listing, error, loading, request: loadListing } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListing();
  }, []);
  return (
    <Screen style={styles.Screen}>
      {error && (
        <Fragment>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListing} />
        </Fragment>
      )}
      <ActivityIndicator visible={loading} />
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
