import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./BottomBar";
import { FontSize, Border, Padding, FontFamily, Color } from "../GlobalStyles";

const Driver = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.driver}>
      <View style={[styles.driver1, styles.driver1FlexBox]}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Drive!</Text>
          <BottomBar></BottomBar>
        </View>
        <View style={styles.image}>
          <View style={styles.img} />
          <View style={[styles.description, styles.paginationPosition]}>
            <Text style={[styles.title1, styles.titleLayout]}>
              Find a Ride Near You!
            </Text>
          </View>
          <View style={[styles.pagination, styles.paginationPosition]}>
            <View style={[styles.paginationChild, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
          </View>
        </View>
        <View style={[styles.bulletList, styles.driver1FlexBox]}>
          <Text style={[styles.title2, styles.titleFlexBox]}>Rider Info</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.textTypo]}>Title</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.textTypo]}>Rider 1</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Destination: X, Arrival: 12:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🧑‍✈️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.textTypo]}>Rider 2</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Destination: Y, Arrival: 12:30 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🧑‍✈️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.textTypo]}>Rider 3</Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Destination: Z, Arrival: 1:00 PM
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🧑‍✈️</Text>
          </View>
        </View>
        <View style={[styles.bulletList, styles.driver1FlexBox]}>
          <Text style={[styles.title7, styles.titleFlexBox]}>
            Filter Riders
          </Text>
          <View style={styles.chipGroup}>
            <View style={[styles.chip, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Chip Text Long</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>By Location</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                By Arrival Time
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driver1FlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  paginationPosition: {
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  titleLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  paginationLayout: {
    height: 4,
    borderRadius: Border.br_81xl,
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
    textAlign: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
  img: {
    top: 8,
    left: 12,
    backgroundColor: Color.gainsboro_200,
    height: 115,
    width: 336,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  title1: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.typePrimary,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  description: {
    marginTop: -20.5,
    marginLeft: -140,
    borderRadius: Border.br_5xs,
    width: 280,
    padding: Padding.p_3xs,
    flexDirection: "row",
    top: "50%",
  },
  paginationChild: {
    width: 20,
    backgroundColor: Color.white,
  },
  paginationItem: {
    backgroundColor: Color.gray_100,
    width: 4,
    marginLeft: 4,
  },
  pagination: {
    marginLeft: -22,
    bottom: 16,
    flexDirection: "row",
  },
  image: {
    height: 131,
    width: 360,
    overflow: "hidden",
  },
  title2: {
    color: Color.gray_200,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
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
  title3: {
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
    height: 1,
    zIndex: 3,
    width: 336,
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
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    padding: Padding.p_xs,
    width: 360,
  },
  title7: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
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
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  driver1: {
    top: 25,
    left: 15,
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
  carIcon: {
    top: 5,
    left: 164,
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
    top: 776,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  driver: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Driver;
