import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <View style={styles.signIn}>
      <View style={styles.topBar}>
        <Text style={[styles.title, styles.titleFlexBox]}>Sign In</Text>
      </View>
      <View style={[styles.input, styles.inputSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>UTD ID</Text>
        <View style={styles.textfield}>
          <TextInput placeholder="Please Enter" style={styles.text} onChangeText={setUserName} blurOnSubmit={true}></TextInput>
        </View>
      </View>
      <View style={[styles.input1, styles.inputSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>Password</Text>
        <View style={styles.textfield}>
          <TextInput placeholder="Please Enter" style={styles.text} onChangeText={setPass} blurOnSubmit={true}></TextInput>
        </View>
      </View>
      <Pressable
        style={[styles.frame, styles.inputSpaceBlock]}
        onPress={() => navigation.navigate("Rider")}
      >
        <View style={styles.button}>
          <View style={[styles.button1, styles.titleFlexBox]}>
            <Text style={[styles.title3, styles.titleTypo]}>Continue</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputSpaceBlock: {
    marginTop: -2,
    overflow: "hidden",
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  title: {
    position: "absolute",
    top: 32,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    width: 296,
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    justifyContent: "center",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
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
    color: Color.gray_100,
    textAlign: "left",
    flex: 1,
  },
  textfield: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flexDirection: "row",
    padding: Padding.p_5xs,
    marginTop: 4,
    alignSelf: "stretch",
    alignItems: "center",
  },
  input: {
    height: 106,
    padding: Padding.p_xs,
    marginTop: -2,
    justifyContent: "center",
    width: 360,
  },
  input1: {
    padding: Padding.p_xs,
    marginTop: -2,
    justifyContent: "center",
    width: 360,
  },
  title3: {
    color: Color.white,
    textAlign: "left",
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  button: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    overflow: "hidden",
  },
  frame: {
    paddingTop: 23,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  signIn: {
    width: "100%",
    height: 844,
    paddingHorizontal: 15,
    paddingTop: 27,
    paddingBottom: 276,
    justifyContent: "flex-end",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignIn;
