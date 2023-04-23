import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Bullet2 = ({ title, subtitle, icon, onBulletPress }) => {
  return (
    <Pressable style={styles.bullet} onPress={onBulletPress}>
      <View style={[styles.background, styles.underlinePosition]} />
      <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
      <Text style={[styles.subtitle, styles.titleFlexBox]}>{subtitle}</Text>
      <View style={[styles.underline, styles.underlinePosition]} />
      <Text style={styles.icon}>{icon}</Text>
    </Pressable>
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
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    width: 32,
    height: 32,
    zIndex: 0,
    top: "50%",
    left: 0,
    position: "absolute",
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
    left: 0,
    position: "absolute",
  },
  icon: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.gray_100,
    textAlign: "center",
    zIndex: 4,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: "50%",
    position: "absolute",
    alignSelf: "stretch",
  },
  bullet: {
    paddingLeft: Padding.p_21xl,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Bullet2;