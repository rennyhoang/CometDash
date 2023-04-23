import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tab1 from "./Tab1";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Settings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.topBarBg]}>
      <View style={[styles.topBar, styles.topBarBg]}>
        <Text style={[styles.title, styles.titleFlexBox]}>Settings</Text>
      </View>
      <View style={[styles.tabs, styles.tabsSpaceBlock]}>
        <View style={[styles.tab, styles.tabBorder]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>😀</Text>
          <Text style={[styles.title1, styles.iconFlexBox]}>Text</Text>
        </View>
        <Pressable
          style={[styles.tab1, styles.tabBorder]}
          onPress={() => navigation.navigate("PaymentOptions")}
        >
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>💰</Text>
          <Text style={[styles.title1, styles.iconFlexBox]}>Billing</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.tabs1, styles.tabsSpaceBlock]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <View style={[styles.tab, styles.tabBorder]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>😀</Text>
          <Text style={[styles.title1, styles.iconFlexBox]}>Text</Text>
        </View>
        <Tab1
          icon="🔔"
          title="Notifications"
          propDisplay="unset"
          propMarginLeft={8}
          propMarginLeft1={-24}
        />
      </Pressable>
      <View style={styles.selection}>
        <Text style={[styles.title4, styles.titleTypo]}>Language</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>English</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Spanish</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Hindi</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Rider")}
      >
        <View style={[styles.button1, styles.titleFlexBox]}>
          <Text style={[styles.title5, styles.titleTypo]}>Save changes</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.button1, styles.titleFlexBox]}>
          <Text style={[styles.title5, styles.titleTypo]}>Log Out</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarBg: {
    backgroundColor: Color.white,
    alignItems: "center",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  tabBorder: {
    padding: Padding.p_9xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    flex: 1,
    alignItems: "center",
  },
  backgroundPosition: {
    zIndex: 0,
    height: 48,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    left: "50%",
    top: 4,
    position: "absolute",
    width: 48,
  },
  iconFlexBox: {
    marginTop: 4,
    color: Color.gray_100,
    fontFamily: FontFamily.robotoRegular,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  chipFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    width: 296,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
    justifyContent: "center",
    color: Color.typePrimary,
  },
  topBar: {
    height: 88,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "flex-end",
    width: 360,
    alignItems: "center",
  },
  background: {
    marginLeft: -24.4,
  },
  icon: {
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    zIndex: 1,
    width: 48,
    marginTop: 4,
    color: Color.gray_100,
  },
  title1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    zIndex: 2,
    alignSelf: "stretch",
  },
  tab: {
    display: "none",
  },
  background1: {
    marginLeft: -23.5,
  },
  tab1: {
    marginLeft: 8,
  },
  tabs: {
    width: 357,
  },
  tabs1: {
    width: 356,
  },
  title4: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.typePrimary,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
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
    alignSelf: "stretch",
    flexDirection: "row",
  },
  selection: {
    height: 96,
    padding: Padding.p_xs,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  title5: {
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
    width: 360,
    overflow: "hidden",
  },
  settings: {
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Settings1;
