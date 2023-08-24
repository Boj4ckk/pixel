import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 

export const Header = ({style}) => {
  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
                <Entypo name="menu" size={35} color="#fff" />
            </View>
            
            <Text style={{...styles.title,...style}}>Accueil</Text>
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flexGrow:1,
       
        justifyContent:'center',
        alignItems:'center'
    },
    wrapper:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-Between'
    },
    title:{
        color:"#fff",
        marginRight:30,
        fontSize:30
    },
    iconWrapper:{
        flex:0.5,
        
    }
    
})