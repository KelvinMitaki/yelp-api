import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Business } from "../screens/SearchScreen";

interface Props {
  result: Business;
}

const ResultsDetails: React.FC<Props> = props => {
  const { result } = props;
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({});
