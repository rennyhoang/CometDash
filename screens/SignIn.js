import * as React from "react";
import { Text, StyleSheet, View, Pressable, KeyboardAvoidingView } from "react-native";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={[styles.topBar, styles.titleFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Sign In</Text>
      </View>
      <Input title="UTD ID" textfieldHeight={106} />
      <Input title="Password" textfieldHeight="unset" />
      <Pressable
        style={styles.frame}
        onPress={() => navigation.navigate("Rider")}
      >
          <View style={[styles.button1, styles.buttonSpaceBlock]}>
            <Text style={[styles.title1, styles.titleTypo]}>Continue</Text>
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
  titleTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    color: Color.typePrimary,
    textAlign: "center",
    display: "flex",
    width: 296,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topBar: {
    height: 88,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  title1: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.white,
    textAlign: "left",
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: Padding.p_base,
    overflow: "hidden",
  },
  frame: {
    paddingTop: 23,
    marginTop: -2,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  signIn: {
    width: "100%",
    paddingHorizontal: Padding.p_mini,
    paddingTop: 27,
    paddingBottom: 276,
    justifyContent: "flex-end",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignIn;
