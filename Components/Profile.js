import { StyleSheet, Text, View ,Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Profile = ({name , imgUrl ,country,category,font}) => {
 
 
  return (
   
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
            <Text style={{...styles.name,...font}}>{name}</Text>
        </View>
        <Image style={styles.img} source={{uri:imgUrl}}/>
        <View style={styles.textWrapper}>
            <Text style={{...styles.textCountry,...font}}>{country}</Text>
            <View style={styles.categoryWrapper}>
                <MaterialCommunityIcons name="account-heart" size={24} color="black" />
                <Text style={{...styles.textCategory,...font}}>{category}</Text>
            </View>
            
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        
        
    },
    wrapper:{
        width:"80%",
        height:350,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginVertical:50
    },
    name:{
        fontSize:25,
        
    },
    img:{
        width:"100%",
        height:"100%",
        borderRadius:25

    },
    textWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        width:"90%",
        
        
    },
    textCountry:{
        marginTop:4,
        fontSize:17
    },
    textCategory:{
        fontSize:17,
        marginTop:4,
        marginHorizontal:5,
       
    },
    categoryWrapper:{
        
        flexDirection:'row'
    }
   
    
})