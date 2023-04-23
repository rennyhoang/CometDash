import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bullet from "../components/Bullet";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Leaderboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboard}>
      <View style={styles.leaderboard1}>
        <View style={styles.topBar}>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("DriverInfo")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icleft.png")}
            />
          </Pressable>
          <Text style={styles.title}>Leaderboard</Text>
        </View>
        <View style={styles.bulletList}>
          <Text style={[styles.title1, styles.titleTypo]}>Leaderboard</Text>
          <Bullet title="Title" subtitle="Subtitle" icon="😀" />
          <Bullet
            title="John Doe"
            subtitle="500 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Jane Doe"
            subtitle="450 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Bob Smith"
            subtitle="400 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Alice Johnson"
            subtitle="350 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Mark Lee"
            subtitle="300 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Karen Wong"
            subtitle="250 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Tom Chen"
            subtitle="200 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Emily Kim"
            subtitle="150 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="David Lee"
            subtitle="100 points"
            icon="🏎️"
            propDisplay="unset"
          />
          <Bullet
            title="Susan Lee"
            subtitle="50 points"
            icon="🏎️"
            propDisplay="unset"
          />
        </View>
        <View style={styles.button}>
          <View style={styles.button1}>
            <Text style={[styles.title2, styles.titleTypo]}>
              View All Drivers
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.materialSymbolspersonOutlinParent}>
        <Pressable
          style={styles.materialSymbolspersonOutlin}
          onPress={() => navigation.navigate("RiderInfo")}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/car.png")}
          />
        </Pressable>
        <Image
          style={[styles.automationIcon, styles.automationLayout]}
          resizeMode="cover"
          source={require("../assets/automation.png")}
        />
      </View>
      <Pressable
        style={[styles.automation, styles.automationLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/automation.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  automationLayout: {
    height: 48,
    width: 48,
    left: 299,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icLeft: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    color: Color.typePrimary,
    textAlign: "center",
    marginLeft: -4,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
  },
  topBar: {
    height: 88,
    flexDirection: "row",
    paddingVertical: Padding.p_25xl,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    backgroundColor: Color.white,
  },
  title1: {
    color: Color.gray_100,
    alignSelf: "stretch",
  },
  bulletList: {
    padding: Padding.p_xs,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  title2: {
    color: Color.white,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
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
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
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
  materialSymbolspersonOutlinParent: {
    top: 776,
    left: 0,
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 68,
    position: "absolute",
  },
  automation: {
    top: 785,
  },
  leaderboard: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Leaderboard;
