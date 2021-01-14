
import React from 'react';
import Inputs from './inputs.js'
import Intake from './component/index.js'
import { StyleSheet, Text, View,ImageBackground ,TextInput} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import ChatScreen from './components/ChatScreen';
import {Ionicons,Entypo} from '@expo/vector-icons'
import {createAppContainer,createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation'
import About from './component/about';

const App = () => {
   return (
      <Inputs />,
      <Intake />
   )
}

const Mytabs = createMaterialTopTabNavigator({
  Chat:ChatScreen,
  Search:ChatScreen,
  About:ChatScreen
},{
  tabBarOptions:{
    style:{
      backgroundColor:'#047a6c'
    }
  }
})


const mystack = createStackNavigator({
  home:Mytabs
},{
  defaultNavigationOptions:{
    title:'AllyApp',
    headerStyle: {
      backgroundColor: '#047a6c',
      elevation:0,
      shadowOpacity:0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight:(
      <View style={{flexDirection:'row',padding:20}}>
        <Ionicons name="md-search" size={32} color="white" />
        <Entypo name="dots-three-vertical" size={23} color="white" style={{marginLeft:10}} />
      </View>
    )
  }

})
export default createAppContainer(mystack);
export default App
export default About

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#f9f9f9',
 
   },
   mycard:{
     marginBottom:10,
     elevation:4
   }
 });
 