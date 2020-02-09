import React, { Component } from "react";
import { View, Text, Button, StyleSheet,StatusBar } from "react-native";

class genderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Gender Screen</Text>
        </View>
        <View>
          <Button
            style={styles.nextButton}
            title="next"
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
    justifyContent: "center"
  },
  nextButton: {
    fontSize: 8,
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  }
});
