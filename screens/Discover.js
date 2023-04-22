import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Attractions, Avatar, Hotel, Notfound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import ItemCarContainer from "../components/ItemCarContainer";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoanding, setIsLoanding] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoanding(true);
    getPlacesData(type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoanding(false);
      }, 2000);
    });
  }, [type]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-3">
        <View className="">
          <Text className="text-[30px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[20px]">The beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}

      {isLoanding ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center px-8 mt-8 justify-center">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              ImageSrc={Hotel}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              ImageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              ImageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[20px] font-bold ">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7]  text-[15px] font-bold ">
                  Explore
                </Text>
                <FontAwesome5
                  name="long-arrow-alt-right"
                  size={22}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCarContainer
                      key={i}
                      ImageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          :"https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[300px] items-center space-y-8 justify-center">
                    <Image
                      source={Notfound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-xl text-[#428288] font-semibold ">
                      Opps... No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
