import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bullet from "./Bullet";
import Bullet2 from "./Bullet2";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const BulletList2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bulletList}>
      <Text style={styles.title}>Payment Options</Text>
      <Bullet title="Title" subtitle="Subtitle" icon="😀" />
      <Bullet2
        title="Comet Cash"
        subtitle="Use your Comet Cash balance to pay."
        icon="💰"
        onBulletPress={() => navigation.navigate("Settings")}
      />
      <Bullet2
        title="Credit/Debit Card"
        subtitle="Use your Credit/Debit Card to pay."
        icon="💳"
        onBulletPress={() => navigation.navigate("PaymentInformation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_100,
    textAlign: "left",
  },
  bulletList: {
    width: 360,
    overflow: "hidden",
    padding: Padding.p_xs,
    alignItems: "center",
    marginTop: 248,
  },
});

export default BulletList2;
