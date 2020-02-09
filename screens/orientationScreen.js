import React, { Component } from "react";
import { View, Text, Button, StyleSheet,StatusBar } from "react-native";

class orientationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Sexual Orientation Screen</Text>
        </View>
        <View>
          <Button
            style={styles.nextButton}
            title="next"
            onPress={() => this.props.navigation.navigate("homeScreen")}
          />
        </View>
      </View>
    );
  }
}
export default orientationScreen;

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
