import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  VirtualizedList,
  StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";

const profile = ({ navigation }) => {
  const db = SQLite.openDatabase("dados.db");
  const [DATA, setDATA] = useState([]);
  // Criar tabela e selecionar linhas
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists nomes2 (id integer " +
          "primary key not null, nome text, sobrenome text, imagem blob);"
      );
      tx.executeSql("Select * from nomes2;", [], (_, { rows }) => {
        console.log(JSON.stringify(rows));
        setDATA(rows);
        // console.log(JSON.stringify(DATA._array[1].nome));
      });
    });
  }, []);

  const getItem = (data, index) => ({
    id: JSON.stringify(data._array[index].id),
    nome: JSON.stringify(data._array[index].nome),
    sobrenome: JSON.stringify(data._array[index].sobrenome),
    imagem: JSON.stringify(data._array[index].imagem)
      .replace('"', "")
      .replace('"', ""),
  });

  const getItemCount = (data) => data.length;

  const Item = ({ foto, nome, sobrenome }) => (
    <View style={styles.item}>
      <Image style={styles.imagem} source={{ uri: foto }} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{sobrenome}</Text>
    </View>
  );

  const atualizarDados = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select id, nome, sobrenome, imagem from nomes2",
        [],
        (_, { rows }) => {
          console.log(JSON.stringify(rows));
          console.log(
            JSON.stringify(rows._array[0].imagem)
              .replace('"', "")
              .replace('"', "")
          );
          setDATA(rows);
          //
          // console.log(JSON.stringify(DATA._array[0].nome));
        }
      );
    });
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 150}}>
        <View>
      <TouchableOpacity onPress={() => navigation.navigate("publicarPost")}>
        <Image source={require("../assets/placeholder.png")} />
      </TouchableOpacity>
      </View>
      <View style={{marginTop: -180}}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <Item
            foto={item.imagem}
            // nome={item.nome}
            // sobrenome={item.sobrenome}
          />
        )}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        refreshing={true}
        scrollEnabled={true}
        onScroll={atualizarDados}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#ccc",
    margin: 8,
    padding: 8,
    minWidth: "70%",
    borderRadius: 8,
  },
  item: {
    height: 400,
    justifyContent: "center",
  },
  nome: {
    fontSize: 16,
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
    width: 260,
    height: 200,
    marginTop: -200,
  },
});

export default profile;
