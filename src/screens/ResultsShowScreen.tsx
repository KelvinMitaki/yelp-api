import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
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
  const [details, setDetails] = useState<BusinessDetails | null>(null);
  const id = props.navigation.getParam("id");
  useEffect(() => {
    resultsDetails(id);
  }, []);
  const resultsDetails = async (id: string) => {
    const { data } = await yelp.get(`/${id}`);
    setDetails(data);
  };
  return (
    <View>
      {details && (
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              marginVertical: 10
            }}
          >
            Gallery
          </Text>
          <FlatList
            data={details.photos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.img} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 5,
    marginHorizontal: 10
  }
});
