import React from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";

const ComoEra = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, styles.firstTitle]}>Como era o Egito Antigo</Text>
        <Text style={styles.text}>
          O Egito Antigo foi uma civilização milenar que floresceu ao longo do
          rio Nilo, no nordeste da África. Dependendo das cheias anuais do rio,
          os egípcios desenvolveram uma sociedade hierárquica, onde o faraó
          reinava como um governante divino. Sua religião, rica em deuses e
          rituais, permeava todas as áreas da vida. Eles deixaram um legado
          impressionante de arte, arquitetura e avanços científicos, como a
          escrita hieroglífica e técnicas de construção de monumentos
          duradouros, incluindo as majestosas pirâmides. O Egito Antigo continua
          a intrigar e fascinar o mundo moderno com sua riqueza cultural e
          histórica.
        </Text>
        <Text style={styles.title}>Pirâmide social</Text>
        <Text style={styles.text}>
          A sociedade do Antigo Egito era hierárquica, organizada em uma
          pirâmide social. Na base estavam os camponeses e trabalhadores. Acima
          estavam os artesãos, comerciantes e profissionais. Mais acima estavam
          os funcionários públicos e sacerdotes. No topo estava o faraó,
          considerado divino e com poder absoluto.
        </Text>
        <Text style={styles.title}>Civilização egípcia</Text>
        <Text style={styles.text}>
          A civilização egípcia floresceu ao longo do rio Nilo por milênios,
          deixando um legado impressionante em arquitetura, arte e ciência.
          Governada por faraós, sua sociedade era hierárquica e profundamente
          religiosa. Eles desenvolveram a escrita hieroglífica e construíram
          monumentos icônicos como as pirâmides. Seu legado continua a
          influenciar a história e a cultura até os dias de hoje.
        </Text>
        <Text style={styles.title}>Economia egípcia</Text>
        <Text style={styles.text}>
          A economia do Antigo Egito era agrícola e baseada nas cheias do rio
          Nilo. Culturas como trigo, cevada e linho eram cultivadas. O comércio
          de produtos como papiro e ouro também era importante. O Estado
          controlava a terra e cobrava impostos, e havia uma classe de artesãos
          e comerciantes.
        </Text>
      </View>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#055592"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#E5C98B",
    paddingVertical: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  firstTitle: {
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "#fff",
  },
});

export default ComoEra;
