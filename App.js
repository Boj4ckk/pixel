import { StyleSheet, Text, View } from 'react-native';
import React , { useState } from 'react';

import {Home} from './Screens/Home'
import { Portfolio } from './Screens/Portfolio';
import { Photo } from './Screens/Photo';

import { Header } from './Components/Header';



import * as Font from 'expo-font'
import Apploading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from './constants/colors';



//Fonction asychrone pour Charger les Fonts
const fetchFont = () =>{
  return(
    Font.loadAsync({
      "Yellow" : require('./fonts/Yellowtail-Regular.ttf'),
      "LilitaOne-Regular" :require('./fonts/LilitaOne-Regular.ttf')
    })
  )
  

}
//////////////////////////////////

export default function App() {

  // Chargement des Fonts
  const [profileHeaderColor , setProfileHeaderColor] = useState('')
  const [fontLoaded , setFontLoaded] = useState(false)
  if(!fontLoaded){
    return(
      <Apploading
      startAsync={fetchFont}
      onFinish={() => setFontLoaded(true)}
      onError={(error) => console.log(error)}/>
    )
  }
  // Fin du code de chargement..

  const Stack = createNativeStackNavigator()
  // stack def..


  
  const handleProfileHeaderColor = (color) =>{
    setProfileHeaderColor(color)
   
  }
 
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>



          <Stack.Screen 
          name='Accueil' 
          options={{
          headerStyle:{
              backgroundColor:colors.saumon
            },
            headerTitle: (props) => <Header {...props} style={styles.headerText}/>,
           
          }} >
            {(props) => <Home {...props} font={styles.headerText} handler={handleProfileHeaderColor}/>}
          </Stack.Screen>
           

          <Stack.Screen 
          name='Portfolio'
          options={{
            headerStyle:{
              backgroundColor:profileHeaderColor
            },
            headerTintColor:'#fff'
            
          }}
          >
            {(props) => <Portfolio {...props}/>}
          </Stack.Screen>
 

        
        <Stack.Screen 
        name='Photo'
        options={{
          headerStyle:{
            backgroundColor:profileHeaderColor
          },
          headerTintColor:'#fff'
        }}
         >
          {(props) => <Photo {...props} font={styles.headerText}/>}
        </Stack.Screen>

        



        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
  headerText:{
    fontFamily:'LilitaOne-Regular'
  }
});
