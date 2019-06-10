
import React from "react"
import { StyleSheet, TouchableOpacity, Text, Dimensions, TouchableHighlight } from "react-native"

export default ({ onPress }) => (
  <TouchableHighlight
    style={styles.touchable}
    underlayColor="transparent"
    onPress={onPress}
  >
    <Text style={styles.text}>Find Friends</Text>
  </TouchableHighlight>

)

const styles = StyleSheet.create({
  touchable: {
    margin: 20,
    backgroundColor: "#acc3d2",
   // borderColor: "#2D4352",
  //  borderWidth: 2,
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 * 0.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "rgba(0,0,0, .4)",
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    color: "#2D4352",
    fontSize: 22,
    fontWeight: "bold",
  },
})
