import React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';

const App = () => {
  return (
    <ImageBackground source={require('./assets/comoera.png')} style={styles.background}>
      <View style={styles.container}>
        <Text>Sobre</Text>
      </View>
    </ImageBackground>
  );
};