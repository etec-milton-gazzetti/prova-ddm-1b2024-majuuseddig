import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <ImageBackground source={require('./assets/comoera.png')} style={styles.background}>
      <View style={styles.container}>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
