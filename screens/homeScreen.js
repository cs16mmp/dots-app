import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import SecureStore from 'expo-secure-store';

const orientation = "none";
const gender = "none";

const Profile1 = [
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
const Profile2= [
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
    title: "Emergency contraception"
  },
  {
    id: "4",
    title: "Contraception"
  },
  {
    id: "5",
    title: "Abortion support"
  },
  {
    id: "6",
    title: "Sexual assault"
  },
  {
    id: "7",
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
  
  _onPressItem() {
    this._getData()
  }
  async _getData(){
    try {
      gender = await SecureStore.getItemAsync("genderScreen")
      orientation = await SecureStore.getItemAsync("orientationScreen")
      console.warn(gender)
      console.warn(orientation)
    } catch (e) {
      console.log(e)
    }
    console.warn(gender)
    console.warn(orientation)

    // if (gender == "Male Cis" && orientation == "Heterosexual") {
    //   return Profile1
    // }
    // return Profile2

  }
  static navigationOptions = {
    headerShown: false
  };
  render() {
    this._getData
    return (
      <FlatList
        data={Profile1}
        renderItem={({ item }) => (
          <TouchableHighlight
            // onPress={() => this.props.navigation.navigate("ItemScreen")}>
            onPress={() => this._onPressItem()}>
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
