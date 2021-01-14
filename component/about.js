import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import logo from './assets/logo1.png'

export default function App() {
    return (
      <View style={styles.container}>
        <Text>ALLY APP</Text>
        <Image source={logo} style={styles.logo} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 10,
      alignItems: 'center',
    },
  });
  
  export default About;
