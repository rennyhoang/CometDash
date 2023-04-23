import React, { useMemo } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input1 = ({ title, propWidth, propAlignSelf, propOverflow }) => {
  const input1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propWidth, propAlignSelf, propOverflow]);

  return (
    <View style={[styles.input, input1Style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]} blurOnSubmit={true}></TextInput>
      </View>
    </View>
  );<TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]} onChangeText={setStartTime} blurOnSubmit={true}></TextInput>
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.typePrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_400,
    textAlign: "left",
  },
  textfield: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flexDirection: "row",
    padding: Padding.p_5xs,
    alignItems: "center",
    marginTop: 4,
    alignSelf: "stretch",
  },
  input: {
    width: 360,
    overflow: "hidden",
    padding: Padding.p_xs,
    justifyContent: "center",
  },
});

export default Input1;
