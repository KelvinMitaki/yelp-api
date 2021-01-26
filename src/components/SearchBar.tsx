import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  const [inp, setInp] = useState<string>("");
  return (
    <View style={styles.background}>
      <Feather name="search" size={35} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text => setInp(text)}
        value={inp}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e5e2e2",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 15
  },
  input: {
    height: 50,
    paddingLeft: 15,
    fontSize: 18,
    flex: 1
  }
});
