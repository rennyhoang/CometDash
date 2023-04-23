import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Notifications1 = () => {
  return <View style={styles.notifications} />;
};

const styles = StyleSheet.create({
  notifications: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notifications1;
