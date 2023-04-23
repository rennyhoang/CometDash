import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Image1 from "../components/Image1";
import Input1 from "../components/Input1";
import Tab1 from "../components/Tab1";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Group = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.group}>
      <View style={[styles.group1, styles.group1FlexBox]}>
        <View style={styles.topBar}>
          <Text style={[styles.title, styles.titleFlexBox]}>Group!</Text>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("Rider")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icleft1.png")}
            />
          </Pressable>
        </View>
        <ScrollView automaticallyadjustcontentinsets={false}>
        <Image1 title="Image of riders sharing a ride" />
        <View style={styles.button}>
          <View style={[styles.button1, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.titleTypo]}>
              Join a Group Ride
            </Text>
          </View>
        </View>
        <Input1 title="Group Name" propWidth={360} propOverflow="hidden" />
        <Input1 title="Number of Riders" />
        <Input1 title="Date and Time" />
        <View style={styles.tabs}>
          <Tab1 icon="😀" title="Text" />
          <Tab1
            icon="🚙"
            title="SUV"
            propDisplay="unset"
            propMarginLeft={8}
            propMarginLeft1={-24.33}
          />
          <Tab1
            icon="🚗"
            title="Sedan"
            propDisplay="unset"
            propMarginLeft={8}
            propMarginLeft1={-24.33}
          />
          <Tab1
            icon="🏍"
            title="Motorcycle"
            propDisplay="unset"
            propMarginLeft={8}
            propMarginLeft1={-24.33}
          />
        </View>
        <View style={[styles.bulletList, styles.group1FlexBox]}>
          <Text style={[styles.title2, styles.titleTypo]}>Group Details</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.icon1Typo]}>Title</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.icon1Typo]}>Group Name</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>
              Name of your group
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>👥</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.icon1Typo]}>
              Number of Riders
            </Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>
              How many people are needed for the ride to happen
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🚶‍♂️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.icon1Typo]}>Date and Time</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>
              When and where will the ride start
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>⏰</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.icon1Typo]}>Vehicle Type</Text>
            <Text style={[styles.subtitle, styles.icon1Typo]}>
              What type of vehicle will be used for the ride
            </Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Typo]}>🚗</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={[styles.button1, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.titleTypo]}>
              Create Group Ride
            </Text>
          </View>
        </View>
       
        <ScrollView>
          <View style={{height:320}} />
        </ScrollView>

       </ScrollView>
      </View>
      <View
        style={[styles.materialSymbolspersonOutlinParent, styles.icon1Position]}
      >
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
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={styles.carIcon}
          resizeMode="cover"
          source={require("../assets/car.png")}
        />
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
  group1FlexBox: {
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
    right: 39,
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
  tabs: {
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    overflow: "hidden",
  },
  title2: {
    color: Color.gray_100,
    textAlign: "left",
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
  title3: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    zIndex: 1,
    textAlign: "left",
    color: Color.typePrimary,
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
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    padding: Padding.p_xs,
    width: 360,
  },
  group1: {
    top: 19,
    left: 15,
    height: 1060,
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
  materialSymbolspersonOutlinParent: {
    top: 772,
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 68,
  },
  group: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Group;
