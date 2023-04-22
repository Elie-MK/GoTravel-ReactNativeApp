import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title,ImageSrc,type,setType}) => {
    const handlePress = ()=>{
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2 ml-3" onPress={handlePress}>
      <View className={`w-16 h-16 p-1 shadow-sm rounded-full items-center justify-center ${type=== title.toLowerCase()? "bg-gray-200" : ""}`}>
        <Image source={ImageSrc} className="w-full h-full object-cover"/>
      </View>
      <Text className="text-[#00BCC9] text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer