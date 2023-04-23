import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <View style={[styles.settings1, styles.settings1FlexBox]}>
        <View style={styles.topBar}>
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
          <View style={[styles.tab1, styles.tabBorder]}>
            <View style={[styles.background3, styles.backgroundPosition]} />
            <Text style={[styles.icon, styles.iconFlexBox]}>🔔</Text>
            <Text style={[styles.title1, styles.iconFlexBox]}>
              Notifications
            </Text>
          </View>
        </Pressable>
        <View style={[styles.selection, styles.settings1FlexBox]}>
          <Text style={[styles.title5, styles.titleTypo]}>Language</Text>
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
            <Text style={[styles.title6, styles.titleTypo]}>Save changes</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={[styles.button1, styles.titleFlexBox]}>
            <Text style={[styles.title6, styles.titleTypo]}>Log Out</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Pressable
          style={[
            styles.materialSymbolspersonOutlin,
            styles.automationIconPosition,
          ]}
          onPress={() => navigation.navigate("RiderInfo")}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/car@3x.png")}
          />
        </Pressable>
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation@3x.png")}
        />
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settings1FlexBox: {
    alignItems: "center",
    overflow: "hidden",
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
    alignItems: "center",
    flex: 1,
  },
  backgroundPosition: {
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    left: "50%",
    top: 4,
    height: 48,
    width: 48,
    position: "absolute",
  },
  iconFlexBox: {
    marginTop: 4,
    color: Color.gray_200,
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
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 68,
    width: 390,
    position: "absolute",
  },
  automationIconPosition: {
    top: 9,
    position: "absolute",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    width: 296,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    justifyContent: "center",
    color: Color.typePrimary,
    position: "absolute",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
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
    color: Color.gray_200,
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
  background3: {
    marginLeft: -24,
  },
  tabs1: {
    width: 356,
  },
  title5: {
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
  },
  title6: {
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
  settings1: {
    top: 6,
    left: 15,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    backgroundColor: Color.gainsboro_100,
  },
  vectorIcon: {
    width: 32,
    height: 32,
  },
  materialSymbolspersonOutlin: {
    left: 39,
    width: 74,
    height: 59,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  car: {
    left: 164,
    top: 5,
    width: 63,
    height: 61,
    position: "absolute",
  },
  automationIcon: {
    left: 299,
    height: 48,
    top: 9,
    width: 48,
  },
  groupParent: {
    top: 776,
    left: 1,
    height: 68,
    width: 390,
    position: "absolute",
  },
  settings: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Settings;
