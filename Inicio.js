import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/egitoantigo.png")} style={styles.backgroundImage}>
        <View style={styles.buttonsContainer}>
          <Button title="Como era" onPress={() => navigation.navigate('ComoEra')} color="#055592" style={styles.button} />
          <View style={styles.separator} />
          <Button title="Mitologia Egípcia" onPress={() => navigation.navigate('MitologiaEgipcia')} color="#055592" style={styles.button} />
          <View style={styles.separator} />
          <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} color="#055592" style={styles.button} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height:'100%',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#055592',
    paddingVertical: 15,
    borderRadius: 10,
  },
  separator: {
    height: 10, // Altura da margem entre os botões
  },
});

export default Inicio;
