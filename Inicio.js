import React from 'react';
import { View, Button, StyleSheet, ImageBackground, Text } from 'react-native';

const App = () => {
  const onPressComoEra = () => {
    console.log('Botão "Como Era" pressionado');
  };

  const onPressMitologiaEgipicia = () => {
    console.log('Botão "Mitologia Egípcia" pressionado');
  };

  const onPressSobre = () => {
    console.log('Botão "Sobre" pressionado');
  };

  return (
    <ImageBackground source={require('./assets/egitoantigo.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigation.navigate('ComoEra')} />
        <Button title="Sobre" onPress={() => navigation.navigate('Mitologia')} />
        <Button title="Home" onPress={() => navigation.navigate('Sobre')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const CustomButton = ({ title, onPress }) => (
  <View style={styles.button}>
    <Button title={title} onPress={onPress} color="#055592" />
  </View>
);

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
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default App;