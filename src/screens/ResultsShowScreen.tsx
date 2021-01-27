import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import yelp from "../api/yelp";

export interface BusinessDetails {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: {
    alias: string;
    title: string;
  }[];
  rating: number;
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
    cross_streets: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  photos: string[];
  price: "$" | "$$" | "$$$" | "$$$$";
  hours: {
    open: {
      is_overnight: boolean;
      start: string;
      end: string;
      day: number;
    }[];

    hours_type: string;
    is_open_now: boolean;
  }[];
  transactions: string[];
  special_hours: {
    date: string;
    is_closed: boolean | null;
    start: string;
    end: string;
    is_overnight: boolean;
  }[];
}

const ResultsShowScreen: React.FC<{
  navigation: StackNavigationProp<NavigationRoute, { id: string }>;
}> = props => {
  useEffect(() => {
    resultsDetails(props.navigation.state.params!.id);
  }, []);
  const resultsDetails = async (id: string) => {
    const { data } = await yelp.get(`/${id}`);
    console.log(data);
  };
  return (
    <View>
      <Text>ResultsShowScreen ResultsShowScreen</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
