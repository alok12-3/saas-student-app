import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Link} from "expo-router"
import { useRouter } from 'expo-router';

const settings = () => {
  
   const route = useRouter()
    return (
      <View style={{flex:1,justifyContent:'center',  alignItems:'center'}}>
        <Text onPress={()=>{route.back()}}> settings page </Text>
      
      </View>
    )
  }


export default settings
