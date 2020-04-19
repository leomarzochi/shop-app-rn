import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
