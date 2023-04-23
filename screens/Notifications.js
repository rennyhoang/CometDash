import * as React from "react";
import { StyleSheet, View } from "react-native";
import Page from "../components/Page";
import { Color } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <Page />
    </View>
  );
};

const styles = StyleSheet.create({
  notifications: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default Notifications;
