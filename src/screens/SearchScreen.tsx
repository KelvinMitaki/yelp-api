import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

export interface Business {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
  categories: {
    alias: string;
    title: string;
  }[];
  review_count: number;
  name: string;
  url: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  image_url: string;
  location: {
    city: string;
    country: string;
    address2: string;
    address3: string;
    address1: string;
    state: string;
    zip_code: string;
  };
  distance: number;
  transactions: string[];
}

const SearchScreen = () => {
  const [inp, setInp] = useState<string>("");
  const [results, setResults] = useState<Business[]>([]);
  const [error, setError] = useState<string>("");
  return (
    <View>
      <SearchBar
        inp={inp}
        setInp={setInp}
        onSubmit={async () => {
          try {
            const { data } = await yelp("/search", {
              params: {
                term: inp,
                location: "new york"
              }
            });
            setResults(data.businesses);
          } catch (error) {
            setError("Something went wrong");
          }
        }}
      />
      {error ? <Text>{error}</Text> : null}
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{JSON.stringify(item, null, 2)}</Text>}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
