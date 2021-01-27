import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import yelp from "../api/yelp";
import { Business } from "../screens/SearchScreen";

const useResults = (
  inp: string
): [results: Business[], error: string, searchApi: () => Promise<void>] => {
  const [results, setResults] = useState<Business[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    searchApi();
  }, []);
  const searchApi = async () => {
    try {
      const { data } = await yelp("/search", {
        params: {
          term: inp || "chicken",
          location: "new york",
          limit: 50
        }
      });
      setResults(data.businesses);
    } catch (error) {
      setError("Something went wrong");
    }
  };
  return [results, error, searchApi];
};

export default useResults;

const styles = StyleSheet.create({});
