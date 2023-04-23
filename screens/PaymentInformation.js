import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View, Pressable } from "react-native";
import Input1 from "../components/Input1";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PaymentInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInformation}>
      <View style={[styles.topBar, styles.topBarLayout]}>
        <Image
          style={styles.icLeftIcon}
          resizeMode="cover"
          source={require("../assets/icleft.png")}
        />
        <Text style={styles.title}>Enter Payment Information</Text>
      </View>
      <ScrollView>
      <Input1 title="Full Name" propOverflow="unset" />
      <Input1 title="Email Address" propOverflow="unset" />
      <Input1 title="Billing address" propOverflow="unset" />
      <Input1 title="City" propOverflow="unset" />
      <Input1 title="Zip Code" propOverflow="unset" />
      <View style={styles.selection}>
        <Text style={[styles.title1, styles.titleTypo]}>Payment Method</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Credit Card</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>PayPal</Text>
          </View>
        </View>
      </View>
      <Input1 title="Cardholder's Name" propOverflow="unset" />
      <Input1 title="Card Number" propOverflow="unset" />
      <View style={styles.selection}>
        <Text style={[styles.title1, styles.titleTypo]}>Expiration Month</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>January</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>February</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>March</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>April</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>May</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>June</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>July</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>August</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>September</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>October</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>November</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>December</Text>
          </View>
        </View>
      </View>
      <View style={styles.selection}>
        <Text style={[styles.title1, styles.titleTypo]}>Expiration Year</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2021</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2022</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2023</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2024</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2025</Text>
          </View>
        </View>
      </View>
      <Input1 title="CVV" propOverflow="unset" />
      <Pressable
        style={[styles.button, styles.topBarLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.button1, styles.chipFlexBox]}>
          <Text style={[styles.title4, styles.titleTypo]}>Submit Payment</Text>
        </View>
      </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarLayout: {
    width: 360,
    paddingHorizontal: Padding.p_xs,
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  chipFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  icLeftIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    marginLeft: -4,
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
  },
  topBar: {
    height: 88,
    paddingVertical: Padding.p_25xl,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    width: 360,
  },
  title1: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.typePrimary,
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.typePrimary,
  },
  chip: {
    display: "none",
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  chip1: {
    marginLeft: 8,
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  chipGroup: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  selection: {
    padding: Padding.p_xs,
    alignItems: "center",
    width: 360,
  },
  title4: {
    color: Color.white,
    textAlign: "left",
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
  },
  button: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
  },
  paymentInformation: {
    width: "100%",
    height: 1152,
    paddingHorizontal: Padding.p_mini,
    paddingTop: 17,
    paddingBottom: 13,
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PaymentInformation;
