import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Business } from "../screens/SearchScreen";
import ResultsDetails from "./ResultsDetails";

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
        showsHorizontalScrollIndicator={false}
        data={props.restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ResultsDetails result={item} />}
      />
      <Text>{props.restaurants.length}</Text>
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
