import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BulletList2 from "../components/BulletList2";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PaymentOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentOptions}>
      <View style={styles.topBar}>
        <Image
          style={styles.icLeftIcon}
          resizeMode="cover"
          source={require("../assets/icleft.png")}
        />
        <Text style={styles.title}>Choose Payment Option</Text>
      </View>
      <BulletList2 />
    </View>
  );
};

const styles = StyleSheet.create({
  icLeftIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.typePrimary,
    textAlign: "center",
    marginLeft: -4,
    flex: 1,
  },
  topBar: {
    width: 360,
    height: 88,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_25xl,
    backgroundColor: Color.white,
  },
  paymentOptions: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    paddingHorizontal: Padding.p_mini,
    paddingTop: 11,
    paddingBottom: 347,
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PaymentOptions;
