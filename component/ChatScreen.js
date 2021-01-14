
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { Avatar, Card, Title, Paragraph,Button } from 'react-native-paper';
import Mycard from './Chat';

export default class  ChatScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'chat',
      }
      render(){
          return (
               <View>
                   <ScrollView>
                    <Mycard name="Abc" />
                    <Mycard name="Def"/>
                    <Mycard name="Xyz"/>
                   </ScrollView>
               </View>
            );
        
      }
  
}