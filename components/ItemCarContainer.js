import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCarContainer = ({ImageSrc, title,location, data}) => {
    const navigattion= useNavigation()
  return (
    <TouchableOpacity onPress={()=> navigattion.navigate("ItemScreen", {param:data})} className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[138px] my-2">
        <Image source={{uri: ImageSrc}}  className="w-full h-28 rounded-md object-cover"/>
       {title ? (
         <>
         <Text className="text-[#428288] text-[10px] font-bold ">{
            title?.length > 10 ? `${title.slice(0, 10)}..`: title}
            </Text>
      
      <View className="flex-row items-center space-x-1">
      <FontAwesome name="map-marker" size={24} color="#8597A2" />
        <Text className="text-[#428288] text-[10px] font-bold ">{
                location?.length > 10 ? `${location.slice(0, 10)}..`: location}
            </Text>
      </View>
         </>
       ): (
        <></>
       )}
    </TouchableOpacity>
  )
}

export default ItemCarContainer