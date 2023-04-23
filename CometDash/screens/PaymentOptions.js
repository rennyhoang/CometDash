import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./BottomBar";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentOptions}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Choose Payment Option</Text>
        <Image
          style={styles.icLeftIcon}
          resizeMode="cover"
          source={require("../assets/icleft@3x.png")}
        />
      </View>
      <View style={styles.bulletList}>
        <Text style={styles.title1}>Payment Options</Text>
        <View style={[styles.bullet, styles.bulletSpaceBlock]}>
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title2, styles.iconTypo]}>Title</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>Subtitle</Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>😀</Text>
        </View>
        <Pressable
          style={styles.bulletSpaceBlock}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title2, styles.iconTypo]}>Comet Cash</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>
            Use your Comet Cash balance to pay.
          </Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>💰</Text>
        </Pressable>
        <Pressable
          style={styles.bulletSpaceBlock}
          onPress={() => navigation.navigate("PaymentInformation")}
        >
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title2, styles.iconTypo]}>
            Credit/Debit Card
          </Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>
            Use your Credit/Debit Card to pay.
          </Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>💳</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bulletSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iconTypo: {
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    display: "flex",
    width: 296,
    justifyContent: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    textAlign: "center",
    color: Color.typePrimary,
    position: "absolute",
  },
  icLeftIcon: {
    marginTop: 0,
    right: 324,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  topBar: {
    top: 11,
    height: 88,
    width: 360,
    left: 15,
    position: "absolute",
    backgroundColor: Color.white,
  },
  title1: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
    color: Color.gray_200,
    alignSelf: "stretch",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  background: {
    marginTop: -14,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    width: 32,
    height: 32,
    zIndex: 0,
    top: "50%",
  },
  title2: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    zIndex: 1,
    textAlign: "left",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoRegular,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_300,
    zIndex: 2,
    textAlign: "left",
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_400,
    width: 336,
    height: 1,
    zIndex: 3,
  },
  icon: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 4,
    left: 0,
    position: "absolute",
    color: Color.gray_200,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    top: 347,
    padding: Padding.p_xs,
    alignItems: "center",
    width: 360,
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  paymentOptions: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default PaymentOptions;
