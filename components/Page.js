import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bullet from "./Bullet";
import Bullet1 from "./Bullet1";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Page = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.page, styles.pageFlexBox]}>
      <View style={styles.topBar}>
        <Pressable
          style={styles.icLeft}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icleft.png")}
          />
        </Pressable>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={[styles.selection, styles.pageFlexBox]}>
        <Text style={[styles.title1, styles.titleTypo]}>Remind me...</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>5 minutes before</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>10 minutes before</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>15 minutes before</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>30 minutes before</Text>
          </View>
        </View>
      </View>
      <View style={styles.showcase}>
        <View style={[styles.selection, styles.pageFlexBox]}>
          <Text style={[styles.title2, styles.titleTypo]}>
            Recent Notifications
          </Text>
          <Bullet
            title="Title"
            subtitle="Subtitle"
            icon="😀"
            propDisplay="none"
          />
          <Bullet1 title="New message from John" subtitle="3 minutes ago" />
          <Bullet1 title="You have a ride soon" subtitle="1 hour ago" />
        </View>
      </View>
      <View style={[styles.selection, styles.pageFlexBox]}>
        <Text style={[styles.title1, styles.titleTypo]}>Mute for...</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>1 hour</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>2 hours</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>5 hours</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>10 hours</Text>
          </View>
        </View>
      </View>
      <View style={[styles.selection, styles.pageFlexBox]}>
        <Text style={[styles.title4, styles.titleTypo]}>Mute all</Text>
      </View>
      <View style={styles.top} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageFlexBox: {
    alignItems: "center",
    overflow: "hidden",
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
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  icLeft: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    marginLeft: -4,
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  topBar: {
    height: 88,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_25xl,
    flexDirection: "row",
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
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  selection: {
    padding: Padding.p_xs,
    width: 360,
  },
  title2: {
    color: Color.gray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  showcase: {
    borderRadius: Border.br_5xs,
    width: 360,
    overflow: "hidden",
  },
  title4: {
    width: 335,
    textAlign: "left",
    color: Color.typePrimary,
  },
  top: {
    alignSelf: "stretch",
    height: 24,
    backgroundColor: Color.white,
  },
  page: {
    backgroundColor: Color.white,
  },
});

export default Page;
