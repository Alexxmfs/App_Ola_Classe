import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SIZES, assets } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";
import { CircleButton } from "../components/Button";
import * as ImagePicker from "expo-image-picker";

const PublicarPost = ({ navigation }) => {
  const [imagePost1, setImagePost1] = useState(null);
  const [imagePost2, setImage2] = useState(null);

  const [forceUpdate] = useForceUpdate();
  const database = SQLite.openDatabase("dados.database");

  useEffect(() => {
    database.transaction((tx) => {
      tx.executeSql(
        "create table if not exists nomes (id integer " +
          "primary key auto_increment, nome text, sobrenome text)"
      );
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Lamento, precisamos de sua " +
              "permissão para executar este serviço"
          );
        }
      }
    })();
    database.transaction((tx) => {
      tx.executeSql(
        "create table if not exists nomes2 " +
          "(id integer primary key not null auto_increment, " +
          "nome text, sobrenome text, " +
          " imagem blob);"
      );
    });
  }, []);

  const adicionar = (nome, sobrenome) => {
    if (nome === null || nome === "") {
      Alert.alert("Por favor, preencha o campo nome!");
    } else {
      database.transaction(
        (tx) => {
          tx.executeSql(
            "insert into nomes2 (nome, sobrenome, imagem) values (?, ?, ?)",
            [nome, sobrenome, imagePost1]
          );
          tx.executeSql("select * from nomes2", [], (_, { rows }) =>
            console.log(JSON.stringify(rows))
          );
        },
        null,
        useForceUpdate
      );
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      sobrenome: "",
    },
  });

  const onSubmit = async (dataimage) => {
    console.log(dataimage);

    // Dados serão armazenados no AsyncStorage
    try {
      // Dados serão transformados em um objeto JSON
      const dadosJSON = JSON.stringify(dataimage);
      // Dados transformados serão guardados no AsyncStorage
      await AsyncStorage.setItem("@dados", dadosJSON);
      await AsyncStorage.setItem("@imagem", imagePost1);
      // Solicitar gravação de dados na tabela dados.database SQLite
      adicionar(dataimage.nome, dataimage.sobrenome);
      // Mensagem
      Alert.alert(dataimage.nome + "\n" + dataimage.sobrenome);
    } catch (e) {
      // saving error
      Alert.alert(e.message);
    }
  };

  // Componente de carregamento da imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImagePost1(result.uri);
    }
  };

  const ImagemCarregada = () => (
    <View style={styles.containerImagem}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={assets.placeholderImg}
          style={{ width: 300, height: 200, borderRadius: 10 }}
        />
        <View>
          {imagePost1 && (
            <Image source={{ uri: imagePost1 }} style={styles.imagem} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  const ImagemRecuperada = () => (
    <View style={styles.containerImagem}>
      <Button title="Carregar Imagem" onPress={pickImage} />
      {imagePost2 && (
        <Image source={{ uri: imagePost2 }} style={styles.imagem} />
      )}
    </View>
  );

  return (
    <ScrollView>
      <SafeAreaView accessibilityRole="scrollbar">
        <View style={styles.circleButton}>
          <CircleButton
            imgUrl={assets.next}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ImagemCarregada />
        <View
          style={{
            flex: 1,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Digite uma descrição"
              />
            )}
            name="nome"
          />
          {errors.nome && <Text>Campo obrigatório!</Text>}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              width: 230,
              padding: 10,
              backgroundColor: "#0A58EE",
              borderRadius: 10,
              marginTop: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 17, color: "#FFF", fontWeight: "700" }}>
              Publicar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#ACD3FC",
    margin: 8,
    padding: 8,
    minWidth: "70%",
    borderRadius: 8,
  },
  nome: {
    fontSize: 32,
    color: "black",
  },
  containerImagem: {
    width: 100,
    height: 200,
    marginTop: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 300,
    borderRadius: 10,
    height: 200,
    marginTop: -200,
  },
  circleButton: {
    marginTop: 40,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
});

export default PublicarPost;
