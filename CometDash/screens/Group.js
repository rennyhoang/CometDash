import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Padding, Color, FontFamily } from "../GlobalStyles";
import BottomBar from "./BottomBar";

const Group = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.group}>
      <View style={styles.group1}>
        <View style={styles.topBar}>
          <Text style={[styles.title, styles.titleFlexBox]}>Group!</Text>
          <BottomBar></BottomBar>
        </View>
        <View style={styles.image}>
          <View style={styles.img} />
          <View style={[styles.description, styles.paginationPosition]}>
            <Text style={[styles.title1, styles.titleLayout]}>
              Image of riders sharing a ride
            </Text>
          </View>
          <View style={[styles.pagination, styles.paginationPosition]}>
            <View style={[styles.paginationChild, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.button1}>
            <Text style={[styles.title2, styles.titleLayout]}>
              Join a Group Ride
            </Text>
          </View>
        </View>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <Text style={[styles.title3, styles.titleLayout]}>Group Name</Text>
          <View style={[styles.textfield, styles.title6SpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
          </View>
        </View>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <Text style={[styles.title3, styles.titleLayout]}>
            Number of Riders
          </Text>
          <View style={[styles.textfield, styles.title6SpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
          </View>
        </View>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <Text style={[styles.title3, styles.titleLayout]}>Date and Time</Text>
          <View style={[styles.textfield, styles.title6SpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
          </View>
        </View>
        <View style={styles.tabs}>
          <View style={[styles.tab, styles.tabBorder]}>
            <View style={[styles.background, styles.backgroundPosition]} />
            <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
            <Text style={[styles.title6, styles.title6Position]}>Text</Text>
          </View>
          <View style={[styles.tab1, styles.tabBorder]}>
            <View style={[styles.background1, styles.backgroundPosition]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🚙</Text>
            <Text style={[styles.title6, styles.title6Position]}>SUV</Text>
          </View>
          <View style={[styles.tab1, styles.tabBorder]}>
            <View style={[styles.background1, styles.backgroundPosition]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🚗</Text>
            <Text style={[styles.title6, styles.title6Position]}>Sedan</Text>
          </View>
          <View style={[styles.tab1, styles.tabBorder]}>
            <View style={[styles.background1, styles.backgroundPosition]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🏍</Text>
            <Text style={[styles.title6, styles.title6Position]}>
              Motorcycle
            </Text>
          </View>
        </View>
        <View style={[styles.bulletList, styles.inputSpaceBlock]}>
          <Text style={[styles.title10, styles.titleLayout]}>
            Group Details
          </Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background4, styles.vectorIconLayout]} />
            <Text style={[styles.title11, styles.icon1Position]}>Title</Text>
            <Text style={[styles.subtitle, styles.title6Position]}>
              Subtitle
            </Text>
            <View style={[styles.underline, styles.icon5Position]} />
            <Text style={[styles.icon5, styles.icon5Position]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background4, styles.vectorIconLayout]} />
            <Text style={[styles.title11, styles.icon1Position]}>
              Group Name
            </Text>
            <Text style={[styles.subtitle, styles.title6Position]}>
              Name of your group
            </Text>
            <View style={[styles.underline, styles.icon5Position]} />
            <Text style={[styles.icon5, styles.icon5Position]}>👥</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background4, styles.vectorIconLayout]} />
            <Text style={[styles.title11, styles.icon1Position]}>
              Number of Riders
            </Text>
            <Text style={[styles.subtitle, styles.title6Position]}>
              How many people are needed for the ride to happen
            </Text>
            <View style={[styles.underline, styles.icon5Position]} />
            <Text style={[styles.icon5, styles.icon5Position]}>🚶‍♂️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background4, styles.vectorIconLayout]} />
            <Text style={[styles.title11, styles.icon1Position]}>
              Date and Time
            </Text>
            <Text style={[styles.subtitle, styles.title6Position]}>
              When and where will the ride start
            </Text>
            <View style={[styles.underline, styles.icon5Position]} />
            <Text style={[styles.icon5, styles.icon5Position]}>⏰</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background4, styles.vectorIconLayout]} />
            <Text style={[styles.title11, styles.icon1Position]}>
              Vehicle Type
            </Text>
            <Text style={[styles.subtitle, styles.title6Position]}>
              What type of vehicle will be used for the ride
            </Text>
            <View style={[styles.underline, styles.icon5Position]} />
            <Text style={[styles.icon5, styles.icon5Position]}>🚗</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.button1}>
            <Text style={[styles.title2, styles.titleLayout]}>
              Create Group Ride
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Rider")}
      >
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
            style={styles.vectorIconLayout}
            resizeMode="cover"
            source={require("../assets/vector@3x.png")}
          />
        </Pressable>
        <Image
          style={styles.carIcon}
          resizeMode="cover"
          source={require("../assets/car@3x.png")}
        />
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
  inputSpaceBlock: {
    padding: Padding.p_xs,
    width: 360,
    overflow: "hidden",
  },
  title6SpaceBlock: {
    marginTop: 4,
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
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
  },
  icon1Position: {
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
  },
  title6Position: {
    zIndex: 2,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  bulletSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  vectorIconLayout: {
    height: 32,
    width: 32,
  },
  icon5Position: {
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
  automationPosition: {
    top: 9,
    position: "absolute",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    width: 296,
    justifyContent: "center",
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
    flex: 1,
  },
  description: {
    marginTop: -20.5,
    marginLeft: -140,
    width: 280,
    padding: Padding.p_3xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
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
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  button1: {
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    overflow: "hidden",
  },
  title3: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  text: {
    color: Color.gray_100,
    fontFamily: FontFamily.robotoRegular,
    flex: 1,
  },
  textfield: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    marginTop: 4,
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: Border.br_7xs,
  },
  input: {
    justifyContent: "center",
  },
  background: {
    marginLeft: -24,
    height: 48,
    width: 48,
    top: 4,
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    color: Color.gray_200,
    width: 48,
    zIndex: 1,
    marginTop: 4,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  title6: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    color: Color.gray_200,
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  tab: {
    display: "none",
  },
  background1: {
    marginLeft: -24.33,
    height: 48,
    width: 48,
    top: 4,
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    left: "50%",
    position: "absolute",
  },
  tab1: {
    marginLeft: 8,
  },
  tabs: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 360,
    overflow: "hidden",
  },
  title10: {
    color: Color.gray_200,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  background4: {
    marginTop: -14,
    left: 0,
    position: "absolute",
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    top: "50%",
  },
  title11: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.typePrimary,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_300,
    textAlign: "left",
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_400,
    height: 1,
    zIndex: 3,
    width: 336,
  },
  icon5: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 4,
    color: Color.gray_200,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
    top: "50%",
    textAlign: "center",
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    alignItems: "center",
  },
  group1: {
    top: 19,
    left: 15,
    height: 1060,
    alignItems: "center",
    overflow: "hidden",
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
    height: 48,
    width: 48,
  },
  groupParent: {
    top: 772,
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  group: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Group;
