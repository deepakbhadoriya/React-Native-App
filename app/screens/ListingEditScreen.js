import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  title: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least on image"),
});

const categories = [
  { backgroundColor: "#fc5c65", value: 1, label: "Furniture", icon: "floor-lamp" },
  { backgroundColor: "#fd9644", value: 2, label: "Cars", icon: "car" },
  { backgroundColor: "#fed330", value: 3, label: "Cameras", icon: "camera" },
  { backgroundColor: "#26de81", value: 4, label: "Games", icon: "cards" },
  { backgroundColor: "#2bcbba", value: 5, label: "Clothing", icon: "shoe-heel" },
  { backgroundColor: "#45aaf2", value: 6, label: "Sports", icon: "basketball" },
  { backgroundColor: "#4b7bec", value: 7, label: "Movies & Music", icon: "headphones" },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width="40%" />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns="3"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="60%"
        />
        <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
