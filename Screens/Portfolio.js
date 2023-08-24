import { StyleSheet, Text, View , Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { Picture } from '../Components/Picture'

export const Portfolio = ({route, navigation}) => {
  
  //Information chargé..
  const name = route.params.data.name
  const photoData = route.params.data.photo
  const profilePicture = route.params.data.picture
  const favColor = route.params.data.color
 
  /////////////
  

  const handlePhotoPress = (photo) =>{
  
    navigation.navigate({
        name:'Photo',
        params:{
            url : photo.url,
            photoDesc : photo.photoDesc,
            title : photo.title
        }
    })
  }
  return (
    <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
            <View style={{...styles.headerWrapper,backgroundColor:favColor}}>
                <View style={styles.pictureWrapper}>
                    <Image style={styles.profilePicture} source={{
                        uri:profilePicture
                    }}/>
                    

                </View>
                <View style={styles.nameWrapper}>
                    <Text style={{...styles.name,...route.params.font}}>{name}</Text>
                </View>

            </View>
            <View style={styles.bodyWrapper}>
                <View style={styles.biographieWrapper}>
                    <Text style={styles.biographieTitle}>BIO :</Text>
                    <Text style={styles.biographie}>
                        {route.params.data.desc}
                    </Text>
                </View>
                <View style={styles.photoWrapper}>
                    {
                        photoData.map((photo)=>{
                            
                            return(
                                <TouchableOpacity style={styles.photoWrapper} onPress={() =>handlePhotoPress(photo)}>
                                     <Picture url={photo.url} title={photo.title}/>
                                </TouchableOpacity>
                                    
                                
                                   
                               
                                
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
      
    </View>
  )
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        
    },
    
    headerWrapper:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10
        
    },
    pictureWrapper:{
        backgroundColor:'#fff',
        width:120,
        height:120,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    profilePicture:{
        width:"95%",
        height:'95%',
        borderRadius:100
    },
    nameWrapper:{
        marginTop:20,
        
    },
    name:{
        color:'#fff',
        fontSize:20
    },
    bodyWrapper:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
       
    },
    biographieWrapper:{
        
        justifyContent:'center',
        width:'95%'
       
       
    },
    biographie:{
        padding:20,
        fontSize:20
    },
    biographieTitle:{
        paddingLeft:20,
        marginTop:15,
        fontSize:20,
        fontWeight:"bold"
    },
    photoWrapper:{
        flex:1
    },
    photoWrapper:{
        flex:1,
        marginVertical:5
    }
})