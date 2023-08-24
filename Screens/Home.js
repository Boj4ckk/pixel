import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Profile } from '../Components/Profile'

import {DATA} from '../data/usersData'
import { StatusBar } from 'expo-status-bar'
import Apploading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Portfolio } from './Portfolio'



 export const Home = ({font, navigation,handler}) => {
  
  const handleProfilePress = (item) =>{
    navigation.navigate({
        name:'Portfolio',
        params:{
            data : {
                name: item.name,
                color : item.favColor,
                picture : item.img,
                desc : item.citation,
                photo : item.photos,
                
            },
            font : font 

        },
        merge:true
      })
      handler(item.favColor)

    
  }
  return (
    
    <View style={styles.container}>
       <StatusBar style='light'/>
       
       <View style={styles.profileWrapper}>
        <ScrollView>
            {
                DATA.map((item) =>{
                    return(
                        <TouchableOpacity
                         activeOpacity={0.5}
                          onPress={() => handleProfilePress(item)}>
                            <Profile  name={item.name}
                             imgUrl={item.img}
                              country={item.country}
                               category={item.category}
                                font={font}
                            />
                        </TouchableOpacity>
                        
                    )
                })
            }
        </ScrollView>
        
       </View>
     
    </View>
  )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    
   
    
    
})