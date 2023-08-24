import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export const Photo = ({route , font}) => {
  const url = route.params.url
  const desc = route.params.photoDesc
  const title = route.params.title

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.photoWrapper}>
          <Image 
          style={styles.img}
          source={{
            uri : url
          }}
          />
        </View>
        <View style={styles.descWrapper}>
          <Text style={{...styles.title,...font}}>{title}</Text>
          <Text style={{...styles.desc}}>{desc}</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  wrapper:{
    flex:1
  },
  photoWrapper:{
    flex:0.45,
    
  },
  img:{
    width :450,
    height:300
  },
  descWrapper:{
    flex:0.4,
  },
  title:{
    fontSize:25,
    padding:10,
  },
  desc:{
    fontSize:20,
    padding:20
  }
})