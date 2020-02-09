import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Closest Clinic"
  },
  {
    id: "2",
    title: "Clinics"
  },
  {
    id: "3",
    title: "HIV"
  },
  {
    id: "4",
    title: "PrEP"
  },
  {
    id: "5",
    title: "STI"
  },
  {
    id: "6",
    title: "Mental Health"
  }
];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class homeScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("ItemScreen")}>
            <Item title={item.title} />
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}
export default homeScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
