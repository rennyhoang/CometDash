import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Image1 from "../components/Image1";
import Showcase from "../components/Showcase";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RiderInfo = () => {
  const navigation = useNavigation();
  let scrollViewProps = {
      bounces: false 
  };

  return (
    <View style={styles.riderInfo}>
      <View style={styles.page}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Rider Information</Text>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("DriverInfo")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icleft1.png")}
            />
          </Pressable>
        </View>
        <ScrollView>
        <Image1
          title="Rider Profile Photo"
          rectangle3344Height={360}
          rectangle3347Top={12}
          rectangle3347Height={336}
          rectangle3340MarginTop={-21}
          propColor="#000"
          propBottom={20}
        />
        <View style={styles.bulletList}>
          <Text style={styles.title1}>Rider Stats</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Title</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>
              Most Frequent Stop
            </Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>
              2801 Rutford Ave, Richardson, TX 75080
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🚗</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title2, styles.icon1Typo]}>Reviews</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>14</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>💬</Text>
          </View>
        </View>
        <Showcase
          title="Ride History"
          title1="View All Rides"
          vector={require("../assets/vector1.png")}
          icRecommend={require("../assets/icrecommend1.png")}
          vector1={require("../assets/vector1.png")}
          icRecommend1={require("../assets/icrecommend1.png")}
          vector2={require("../assets/vector1.png")}
          icRecommend2={require("../assets/icrecommend3.png")}
          ellipse87={require("../assets/ellipse-87.png")}
          vector3={require("../assets/vector1.png")}
          icRecommend3={require("../assets/icrecommend3.png")}
        />
       <ScrollView>
        <View style={{height:200}} />
      </ScrollView>

      </ScrollView>
      </View>
      <View
        style={[styles.materialSymbolspersonOutlinParent, styles.icon1Position]}
      >
        <View
          style={[
            styles.materialSymbolspersonOutlin,
            styles.automationPosition,
          ]}
        >
          <Image
            style={styles.backgroundLayout}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/car.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.automation, styles.automationPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/automation.png")}
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
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
    color: Color.gray_100,
    alignSelf: "stretch",
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
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    zIndex: 1,
    textAlign: "left",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoRegular,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_200,
    zIndex: 2,
    textAlign: "left",
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_300,
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
    color: Color.gray_100,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
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
  page: {
    top: 19,
    left: 15,
    height: 927,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
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
  materialSymbolspersonOutlinParent: {
    top: 775,
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 68,
  },
  riderInfo: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RiderInfo;
