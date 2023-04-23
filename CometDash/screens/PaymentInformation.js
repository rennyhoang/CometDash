import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./BottomBar"
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PaymentInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInformation}>
      <View style={[styles.topBar, styles.topBarPosition]}>
        <Text style={styles.title}>Enter Payment Information</Text>
        <Image
          style={styles.icLeftIcon}
          resizeMode="cover"
          source={require("../assets/icleft@3x.png")}
        />
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Full Name</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Email Address</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.input2, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Billing address</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.input3, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>City</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.input4, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Zip Code</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.selection, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Payment Method</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>Credit Card</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>PayPal</Text>
          </View>
        </View>
      </View>
      <View style={[styles.input5, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Cardholder's Name</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.input6, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Card Number</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <View style={[styles.selection1, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Expiration Month</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>January</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>February</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>March</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>April</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>May</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>June</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>July</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>August</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>September</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>October</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>November</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>December</Text>
          </View>
        </View>
      </View>
      <View style={[styles.selection2, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Expiration Year</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>2021</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>2022</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>2023</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>2024</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text5, styles.textTypo]}>2025</Text>
          </View>
        </View>
      </View>
      <View style={[styles.input7, styles.inputPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>CVV</Text>
        <View style={styles.textfield}>
        <TextInput placeholder="Please Enter" style={[styles.text, styles.textTypo]}></TextInput>
        </View>
      </View>
      <BottomBar></BottomBar>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarPosition: {
    width: 360,
    left: 15,
    position: "absolute",
  },
  inputPosition: {
    padding: Padding.p_xs,
    width: 360,
    left: 15,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  chipFlexBox: {
    backgroundColor: Color.whitesmoke_100,
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    width: 296,
    justifyContent: "center",
    alignItems: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icLeftIcon: {
    marginTop: 0,
    top: "50%",
    right: 324,
    width: 24,
    height: 24,
    position: "absolute",
  },
  topBar: {
    top: 17,
    height: 88,
    backgroundColor: Color.white,
  },
  title1: {
    alignSelf: "stretch",
    color: Color.typePrimary,
  },
  text: {
    color: Color.gray_100,
    flex: 1,
  },
  textfield: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    marginTop: 4,
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  input: {
    top: 105,
    justifyContent: "center",
  },
  input1: {
    top: 191,
    justifyContent: "center",
  },
  input2: {
    top: 277,
    justifyContent: "center",
  },
  input3: {
    top: 363,
    justifyContent: "center",
  },
  input4: {
    top: 449,
    justifyContent: "center",
  },
  text5: {
    color: Color.typePrimary,
  },
  chip: {
    display: "none",
  },
  chip1: {
    marginLeft: 8,
  },
  chipGroup: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selection: {
    top: 535,
    alignItems: "center",
  },
  input5: {
    top: 625,
    justifyContent: "center",
  },
  input6: {
    top: 711,
    justifyContent: "center",
  },
  selection1: {
    top: 797,
    alignItems: "center",
  },
  selection2: {
    top: 889,
    alignItems: "center",
  },
  input7: {
    top: 979,
    justifyContent: "center",
  },
  title12: {
    color: Color.white,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    top: 1065,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
  },
  paymentInformation: {
    width: "100%",
    height: 1152,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PaymentInformation;
