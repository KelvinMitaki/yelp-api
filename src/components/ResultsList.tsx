import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  header: string;
}

const ResultsList: React.FC<Props> = props => {
  return (
    <View>
      <Text style={styles.header}>{props.header}</Text>
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
