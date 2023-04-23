import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <View style={[styles.page, styles.pageFlexBox]}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Notifications</Text>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icleft@3x.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.selection, styles.pageFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Remind me...</Text>
          <View style={styles.chipGroup}>
            <View style={[styles.chip, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Chip Text Long</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                5 minutes before
              </Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                10 minutes before
              </Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                15 minutes before
              </Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                30 minutes before
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.showcase}>
          <View style={[styles.selection, styles.pageFlexBox]}>
            <Text style={[styles.title2, styles.icon1Clr]}>
              Recent Notifications
            </Text>
            <View style={[styles.bullet, styles.bulletSpaceBlock]}>
              <View style={[styles.background, styles.icon1Position]} />
              <Text style={[styles.title3, styles.textTypo]}>Title</Text>
              <Text style={styles.subtitle}>Subtitle</Text>
              <View style={[styles.underline, styles.icon1Position]} />
              <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
            </View>
            <View style={styles.bulletSpaceBlock}>
              <View style={[styles.background, styles.icon1Position]} />
              <Text style={[styles.title3, styles.textTypo]}>
                New message from John
              </Text>
              <Text style={styles.subtitle}>3 minutes ago</Text>
              <View style={[styles.underline, styles.icon1Position]} />
            </View>
            <View style={styles.bulletSpaceBlock}>
              <View style={[styles.background, styles.icon1Position]} />
              <Text style={[styles.title3, styles.textTypo]}>
                You have a ride soon
              </Text>
              <Text style={styles.subtitle}>1 hour ago</Text>
              <View style={[styles.underline, styles.icon1Position]} />
            </View>
          </View>
        </View>
        <View style={[styles.selection, styles.pageFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Mute for...</Text>
          <View style={styles.chipGroup}>
            <View style={[styles.chip, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Chip Text Long</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>1 hour</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>2 hours</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>5 hours</Text>
            </View>
            <View style={[styles.chip1, styles.chipFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>10 hours</Text>
            </View>
          </View>
        </View>
        <View style={[styles.selection, styles.pageFlexBox]}>
          <Text style={[styles.title7, styles.titleTypo]}>Mute all</Text>
        </View>
        <View style={styles.top} />
      </View>
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
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.typePrimary,
  },
  icon1Clr: {
    color: Color.gray_200,
    alignSelf: "stretch",
  },
  bulletSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  icon1Position: {
    left: 0,
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
    height: "100%",
    width: "100%",
  },
  icLeft: {
    right: 324,
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
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.typePrimary,
    lineHeight: 22,
    fontSize: FontSize.size_base,
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
  selection: {
    padding: Padding.p_xs,
    width: 360,
  },
  title2: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  background: {
    marginTop: -14,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    width: 32,
    height: 32,
    zIndex: 0,
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
    textAlign: "left",
    alignSelf: "stretch",
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
    color: Color.gray_200,
    alignSelf: "stretch",
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    textAlign: "center",
    left: 0,
  },
  bullet: {
    display: "none",
  },
  showcase: {
    borderRadius: Border.br_5xs,
    width: 360,
    overflow: "hidden",
  },
  title7: {
    width: 335,
    textAlign: "left",
    color: Color.typePrimary,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  top: {
    alignSelf: "stretch",
    height: 24,
    backgroundColor: Color.white,
  },
  page: {
    top: 0,
    left: 15,
    position: "absolute",
    backgroundColor: Color.white,
  },
  notifications: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notifications;
