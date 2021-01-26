import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar SearchBar</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#cccbcb",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});
