import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

const MitologiaEgipcia = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("./assets/mitologia.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>O que é Mitologia Egípcia</Text>
        <Text>
          A mitologia egípcia é o conjunto de crenças, histórias e rituais
          religiosos praticados pelos antigos egípcios. Ela envolve uma ampla
          variedade de deuses e deusas que representavam diferentes aspectos da
          natureza, da vida humana e do cosmos. A mitologia egípcia inclui
          narrativas sobre a criação do mundo, a vida após a morte, o papel dos
          faraós como intermediários entre os deuses e os humanos, e rituais de
          adoração e culto. Essas histórias e crenças eram fundamentais para a
          sociedade egípcia, influenciando sua cultura, arte, arquitetura e
          práticas religiosas.
        </Text>
        <Text style={styles.title}>Fontes de estudo da mitologia egípcia</Text>
        <Text>
          O estudo sobre a mitologia egípcia é realizado de várias formas, como
          através de pirâmides, túmulos, estátuas e fontes escritas. As
          principais fontes escritas utilizadas são o Livro das Pirâmides, o
          Livro dos Sarcófagos, o Livro dos Mortos, os textos de Heródoto e os
          textos de Plutarco.
        </Text>
        <Text style={styles.title}>Principais deuses egípcios</Text>
        <Text>
        Rá-Atum: Rá é o principal deus egípcio e representa o Sol.
        Shu: Shu é o deus do ar. 
        Tefnut: Tefnut é a deusa da umidade. 
        Geb: Geb é o deus da terra. 
        Nut: Nut é a deusa dos céus. 
        Set: Set é o deus do caos, ele representa a guerra e a escuridão. 
        Osíris: Osíris se tornou o deus supremo e o juiz do mundo dos mortos. 
        Ísis: Ísis é a deusa da magia e do amor.
        Nephthys: Nephthys é a deusa associada ao culto dos mortos.
        Hórus: Hórus é o deus protetor dos faraós e das famílias.
        Hathor: Hathor é a deusa guardiã das mulheres, sobretudo as grávidas, e protetora dos amantes. 
        Anúbis: Anúbis é o deus responsável pela passagem para o mundo dos mortos. 
        Maat: Maat é a deusa da verdade e da justiça.
        Sekhmeth: Sekhmeth é a deusa associada ao aspecto destrutivo do Sol. 
        Bastet: Bastet é a deusa da sexualidade e do parto e é atrelada à fertilidade. 
        Thoth: Thoth é o deus da Lua, da sabedoria e da cura. 
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
    alignItems: "center",
    paddingVertical: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MitologiaEgipcia;
