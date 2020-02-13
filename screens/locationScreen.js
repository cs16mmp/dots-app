import React, { Component } from "react";
import { View, Text, Button, StyleSheet,StatusBar } from "react-native";

class locationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Location Screen</Text>
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
export default locationScreen;

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
