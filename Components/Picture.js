import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export const Picture = ({url , title}) => {
  
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{
              uri:url
            }}/>
            <View style={styles.pictureDesc}>
              <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    wrapper:{
      justifyContent:'flex-end',
      flex:1,
      
    },
    image:{
      width:420,
      height:270,
    },
    pictureDesc:{
      position:"absolute",
      width:"100%",
      height:"20%",
      backgroundColor:'rgba(0,0,0,0.5)',
      padding:10,
      
    },
    text:{
      paddingLeft:10,
      fontSize:25,
      color:"#fff"
    }
})