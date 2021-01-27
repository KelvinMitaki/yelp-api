import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export interface Business {
  rating: number;
  price: "$" | "$$" | "$$$" | "$$$$";
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
  const [results, error, searchApi] = useResults(inp);

  const filterResults = (price: Business["price"]) => {
    return results.filter(res => res.price === price);
  };

  return (
    <ScrollView>
      <SearchBar inp={inp} setInp={setInp} onSubmit={() => searchApi()} />
      {error ? <Text>{error}</Text> : null}
      {results.length !== 0 && (
        <Text style={{ paddingLeft: 10 }}>
          We have found {results.length} results
        </Text>
      )}
      <ResultsList header={"Cost Effective"} restaurants={filterResults("$")} />
      <ResultsList header={"Bit Pricier"} restaurants={filterResults("$$")} />
      <ResultsList
        header={"Big Spender"}
        restaurants={[...filterResults("$$$"), ...filterResults("$$$$")]}
      />
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
