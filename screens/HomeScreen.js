import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

const HomeScreen = () => {

    const navigation= useNavigation(); 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false, 
        })
    }, [])
  return (
   <SafeAreaView className="bg-white flex-1 relative">
    {/* First section */}
    <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
        </View>
        <Text className="font-semibold text-[#2A2B4B] text-xl ">Travel</Text>
    </View>
    {/* Second Section */}
    <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[25px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[22px] font-bold ">Good Moments</Text>

        <Text className="text-[#3C6072] text-base ">
            Lorem Ipsum Lorem IpsumLorem IpsumLorem 
        </Text>
    </View>

    {/* Circle section */}

    <View className="w-[250px] h-[250px] bg-[#00BCC9] rounded-full absolute bottom-3 -right-28 "></View>
    <View className="w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-20 -left-20 "></View>
    {/* Image container */}
    <View className="flex-1 relative items-center justify-center">
        <Animatable.Image 
        animation="fadeIn"
        easing="ease-in-out"
            source={HeroImage}
            className="w-[230px] h-[280px] mt-10 object-cover"
        />
      <TouchableOpacity
      onPress={()=>navigation.navigate("Discover")}
      className="absolute bottom-10 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
        <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                <Text className="text-gray-50 text-[20px] font-semibold">GO</Text>
            </Animatable.View>
      </TouchableOpacity>
    </View>

   </SafeAreaView>
  )
}

export default HomeScreen