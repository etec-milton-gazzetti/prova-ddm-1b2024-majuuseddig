import React from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/sobre.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Conteúdo adicional aqui */}
        <View style={styles.buttonContainer}>
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
            color="#055592"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinhar o conteúdo na parte inferior
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%', // Botão ocupará toda a largura
    paddingHorizontal: 20, // Espaçamento horizontal
    marginBottom: 75, // Espaçamento inferior
  },
});

export default Sobre;
