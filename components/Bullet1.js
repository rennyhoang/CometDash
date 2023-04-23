import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Bullet1 = ({ title, subtitle }) => {
  return (
    <View style={styles.bullet}>
      <View style={[styles.background, styles.underlinePosition]} />
      <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
      <Text style={[styles.subtitle, styles.titleFlexBox]}>{subtitle}</Text>
      <View style={[styles.underline, styles.underlinePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  underlinePosition: {
    left: 0,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  background: {
    marginTop: -14,
    top: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    width: 32,
    height: 32,
    zIndex: 0,
  },
  title: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.typePrimary,
    zIndex: 1,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_200,
    zIndex: 2,
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_300,
    width: 336,
    height: 1,
    zIndex: 3,
  },
  bullet: {
    paddingLeft: Padding.p_21xl,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Bullet1;
