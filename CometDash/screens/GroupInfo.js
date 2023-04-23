import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./BottomBar"
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GroupInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupInfo}>
      <View style={styles.page}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Group Information</Text>
          <BottomBar></BottomBar>
        </View>
        <View style={styles.bulletList}>
          <Text style={[styles.title1, styles.titleFlexBox]}>
            Upcoming Rides
          </Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.textTypo]}>Title</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text
              style={[styles.title2, styles.textTypo]}
            >{`Weekly Walmart `}</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Ride today @ 7:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🗻</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.textTypo]}>Tennis Meet</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Ride tomorrow @ 8:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🌾</Text>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={[styles.title5, styles.titleFlexBox]}>
            Select a Riding Group
          </Text>
          <View style={styles.chipGroup}>
            <View style={[styles.chip, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Chip Text Long</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Skaters’ Club</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Tennis Club</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Shopping</Text>
            </View>
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={[styles.title1, styles.titleFlexBox]}>Skaters</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.textTypo]}>Title</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text
              style={[styles.title2, styles.textTypo]}
            >{`Weekly Walmart `}</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Ride today @ 7:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🗻</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.textTypo]}>Tennis Meet</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Ride tomorrow @ 8:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🌾</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Pressable
          style={[
            styles.materialSymbolspersonOutlin,
            styles.automationPosition,
          ]}
          onPress={() => navigation.navigate("RiderInfo")}
        >
          <Image
            style={styles.backgroundLayout}
            resizeMode="cover"
            source={require("../assets/vector@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/car@3x.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.automation, styles.automationPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/automation@3x.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  titleFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  bulletSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  backgroundLayout: {
    height: 32,
    width: 32,
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.typePrimary,
  },
  icon1Position: {
    left: 0,
    position: "absolute",
  },
  chipFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  groupChildPosition: {
    top: 0,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  automationPosition: {
    top: 9,
    position: "absolute",
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
    textAlign: "center",
    color: Color.typePrimary,
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    marginTop: 0,
  },
  icLeft: {
    right: 76,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
  },
  title1: {
    color: Color.gray_200,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  background: {
    marginTop: -14,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    zIndex: 0,
    left: 0,
    position: "absolute",
    top: "50%",
  },
  title2: {
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_300,
    zIndex: 2,
    fontFamily: FontFamily.robotoRegular,
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_400,
    width: 336,
    height: 1,
    zIndex: 3,
  },
  icon1: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 4,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_200,
    alignSelf: "stretch",
    top: "50%",
    textAlign: "center",
    left: 0,
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    padding: Padding.p_xs,
    overflow: "hidden",
    width: 360,
    alignItems: "center",
  },
  title5: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.typePrimary,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  chip: {
    display: "none",
  },
  chip1: {
    marginLeft: 8,
  },
  chipGroup: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  page: {
    top: 19,
    left: 15,
    height: 927,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    backgroundColor: Color.gainsboro_100,
  },
  materialSymbolspersonOutlin: {
    left: 39,
    width: 74,
    height: 59,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  car: {
    left: 164,
    top: 5,
    width: 63,
    height: 61,
    position: "absolute",
  },
  automation: {
    left: 299,
    width: 48,
    height: 48,
  },
  groupParent: {
    top: 775,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupInfo: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default GroupInfo;
