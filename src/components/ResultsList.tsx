import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Business } from "../screens/SearchScreen";

interface Props {
  header: string;
  restaurants: Business[];
}

const ResultsList: React.FC<Props> = props => {
  return (
    <View>
      <Text style={styles.header}>{props.header}</Text>
      <FlatList
        horizontal
        data={props.restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{JSON.stringify(item, null, 2)}</Text>}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});
