import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Business } from "../screens/SearchScreen";

interface Props {
  result: Business;
}

const ResultsDetails: React.FC<Props> = props => {
  const { result } = props;
  return (
    <View>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.desc}>
        {result.rating} Stars, {result.review_count.toLocaleString()} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 5,
    marginHorizontal: 10
  },
  name: {
    alignSelf: "center",
    fontWeight: "bold"
  },
  desc: {
    marginHorizontal: 10
  }
});
