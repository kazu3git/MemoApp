import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          onPress={() => {
            this.props.navigation.navigate("MemoEdit");
          }}
        >
          +
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFDF6",
  },
  /*button: {
    backgroundColor: "#E31676",
    height: 48,
    width: 48,
    bottom: 24,
    left: "35%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 24,
  },*/
});

export default MemoListScreen;
