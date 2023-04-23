import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Image1 from "./Image1";
import Bullet from "./Bullet";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Driver1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.driver, styles.driverFlexBox]}>
      <Image1
        title="Find a Ride Near You!"
        rectangle3344Height={131}
        rectangle3347Top={8}
        rectangle3347Height={115}
        rectangle3340MarginTop={-20.5}
        propColor="rgba(0, 0, 0, 0.9)"
        propBottom={16}
      />
      <View style={[styles.bulletList, styles.driverFlexBox]}>
        <Text style={[styles.title1, styles.titleTypo]}>Rider Info</Text>
        <Bullet title="Title" subtitle="Subtitle" icon="😀" />
        <Bullet
          title="Rider 1"
          subtitle="Destination: X, Arrival: 12:00 PM"
          icon="🧑‍✈️"
          propDisplay="unset"
        />
        <Bullet
          title="Rider 2"
          subtitle="Destination: Y, Arrival: 12:30 PM"
          icon="🧑‍✈️"
          propDisplay="unset"
        />
        <Bullet
          title="Rider 3"
          subtitle="Destination: Z, Arrival: 1:00 PM"
          icon="🧑‍✈️"
          propDisplay="unset"
        />
      </View>
      <View style={[styles.bulletList, styles.driverFlexBox]}>
        <Text style={[styles.title2, styles.titleTypo]}>Filter Riders</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>By Location</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>By Arrival Time</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driverFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignSelf: "stretch",
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
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    width: 296,
    justifyContent: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.typePrimary,
    position: "absolute",
    alignItems: "center",
  },
  icon: {
    marginTop: 0,
    width: "100%",
    height: "100%",
  },
  icLeft: {
    top: "50%",
    right: 76,
    width: 24,
    height: 24,
    position: "absolute",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
  },
  title1: {
    color: Color.gray_100,
    textAlign: "left",
  },
  bulletList: {
    padding: Padding.p_xs,
    width: 360,
  },
  title2: {
    textAlign: "left",
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
  },
  chip1: {
    marginLeft: 8,
  },
  chipGroup: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  driver: {
    backgroundColor: Color.white,
  },
});

export default Driver1;
