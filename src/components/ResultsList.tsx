import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Business } from "../screens/SearchScreen";
import ResultsDetails from "./ResultsDetails";

interface Props {
  header: string;
  restaurants: Business[];
}

const ResultsList: React.FC<Props> = props => {
  return (
    <View style={styles.body}>
      {props.restaurants.length !== 0 && (
        <Text style={styles.header}>{props.header}</Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ResultsDetails result={item} />}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  body: {
    marginVertical: 10
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 10
  }
});
