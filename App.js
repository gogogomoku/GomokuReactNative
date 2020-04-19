import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
} from "react-native";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isLoading === true) {
      fetch("http://192.168.1.26:4242/")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [isLoading]);


  const createNewMatch = () => {
    fetch("http://192.168.1.26:4242/match/new")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Gomoku home is loading...</Text>
      ) : (
        <View>
      <Text>{data.Message}</Text>
      <Button
        onPress={createNewMatch}
        title="Create new Match!"
        color="#841584"
      ></Button>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
