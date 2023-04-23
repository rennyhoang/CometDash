import React, { useMemo } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "./GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input = ({ title,placehold , textfieldHeight }) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("height", textfieldHeight),
    };
  }, [textfieldHeight]);
  const [text, onChangeText] = React.useState('');
  return (
    <View style={[styles.input, inputStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textfield}>
        <TextInput style={styles.text} onChangeText={onChangeText} value={text} placeholder={placehold}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    //fontFamily: FontFamily.robotoMedium,
    color: Color.gray_200,
    textAlign: "left",
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    //fontFamily: FontFamily.robotoRegular,
    color: Color.gray_100,
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
    height: 106,
    overflow: "hidden",
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
});

export default Input;

