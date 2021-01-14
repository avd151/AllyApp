import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

export default function Mycard(props){
          return (
               <View style={{margin:5}}>
                    <Card style={{elevation:5}}>
                        <View style={{flexDirection:"row",padding:10}}>
                            <View>
                               <Image
                                style={{height:80,width:80,borderRadius:40}}
                                source={logo1}
                                 />
                            </View>
                            <View>
                                  <Card.Content>
                                    <Title>{props.name}</Title>
                                    <Paragraph >Hello world</Paragraph>
                                    </Card.Content>
                            </View>
                         
                        </View>
                      
                     </Card>
                   </View>
               
            );
        
    
  
}