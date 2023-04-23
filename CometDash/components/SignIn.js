import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { FontFamily, FontSize, Color, Padding } from "./GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <View style={styles.topBar} />
      <Input title="UTD ID" placehold="Ex: axp230000" textfieldHeight={106} />
      <Input title="Password" placehold="Enter Here" textfieldHeight="unset" />
      <View style={styles.frame}>
        <View style={styles.button}>
          <View style={styles.button1}>
            <Text style={[styles.title, styles.titleTypo]}>Continue</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <Text style={[styles.title1, styles.titleTypo]}>
          Don’t have an account? Register!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
  },
  title: {
    textDecoration: "underline",
    color: Color.white,
    textAlign: "left",
  },
  button1: {
    borderRadius: 8,
    backgroundColor: "#000",
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    overflow: "hidden",
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  title1: {
    color: Color.gray_200,
    textAlign: "center",
    alignSelf: "stretch",
  },
  input: {
    padding: Padding.p_xs,
    justifyContent: "center",
    width: 360,
    overflow: "hidden",
  },
  signIn: {
    flex: 1,
    width: "100%",
    height: 844,
    paddingHorizontal: 15,
    paddingTop: 27,
    paddingBottom: 276,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignIn;

