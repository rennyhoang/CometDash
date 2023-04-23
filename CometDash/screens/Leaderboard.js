import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Leaderboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboard}>
      <View style={[styles.leaderboard1, styles.bulletListFlexBox]}>
        <View style={styles.topBar}>
          <Text style={[styles.title, styles.titleFlexBox]}>Leaderboard</Text>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("DriverInfo")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icleft@3x.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.bulletList, styles.bulletListFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Leaderboard</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Title</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>John Doe</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>500 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Jane Doe</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>450 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Bob Smith</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>400 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Alice Johnson</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>350 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Mark Lee</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>300 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Karen Wong</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>250 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Tom Chen</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>200 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Emily Kim</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>150 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>David Lee</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>100 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Susan Lee</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>50 points</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🏎️</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={[styles.button1, styles.titleFlexBox]}>
            <Text style={[styles.title13, styles.titleTypo]}>
              View All Drivers
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Pressable
          style={styles.materialSymbolspersonOutlin}
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
        <Image
          style={[styles.automationIcon, styles.automationLayout]}
          resizeMode="cover"
          source={require("../assets/automation@3x.png")}
        />
      </View>
      <Pressable
        style={[styles.automation, styles.automationLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/automation@3x.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bulletListFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
  icon1Typo: {
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  icon1Position: {
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  automationLayout: {
    height: 48,
    width: 48,
    left: 299,
    position: "absolute",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    display: "flex",
    width: 296,
    textAlign: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    justifyContent: "center",
    position: "absolute",
  },
  icon: {
    marginTop: 0,
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
    color: Color.gray_200,
    alignSelf: "stretch",
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
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    zIndex: 1,
    textAlign: "left",
    color: Color.typePrimary,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_300,
    zIndex: 2,
    textAlign: "left",
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
    left: 0,
    position: "absolute",
    color: Color.gray_200,
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
  title13: {
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
  leaderboard1: {
    top: 21,
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
    top: 9,
    position: "absolute",
    overflow: "hidden",
  },
  car: {
    left: 164,
    top: 5,
    width: 63,
    height: 61,
    position: "absolute",
  },
  automationIcon: {
    top: 9,
  },
  groupParent: {
    top: 776,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  automation: {
    top: 785,
  },
  leaderboard: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Leaderboard;
