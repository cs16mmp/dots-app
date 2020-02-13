import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ListComponent from ".././components/ListComponent";

const genderList = [
  {
    title: "Female Cis"
  },
  {
    title: "Female Trans"
  },
  {
    title: "Male Cis"
  },
  {
    title: "Male trans"
  }
];

class genderScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centre}>
          <ListComponent
            navigation ={ this.props.navigation }
            list = {genderList}
            nextScreen = "orientationScreen"
            currentScreen = "genderScreen"
          />
        </View>
        <View style={styles.bottom}>
          <Button
            style={styles.nextButton}
            title="Skip"
            onPress={() => this.props.navigation.navigate("orientationScreen")}
          />
        </View>
      </View>
    );
  }
}
export default genderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20
  },
  centre: {
    flex: 80,
    width: 300,
    justifyContent: "center"
  },
  bottom: {
    flex: 20,
    width: 300
  },
  nextButton: {
    fontSize: 8,
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  }
});
