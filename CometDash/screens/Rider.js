import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Rider = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rider}>
      <View style={styles.booking}>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <Text style={[styles.title, styles.titleTypo1]}>Start Time</Text>
          <View style={styles.textfield}>
            <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
          </View>
        </View>
      </View>
      <View style={[styles.input1, styles.inputSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo1]}>Start Address</Text>
        <View style={styles.textfield}>
          <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
        </View>
      </View>
      <View style={[styles.input2, styles.inputSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo1]}>End Address</Text>
        <View style={styles.textfield}>
          <Text style={[styles.text, styles.textTypo]}>Please Enter</Text>
        </View>
      </View>
      <View style={[styles.selection, styles.inputSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo1]}>
          Different from Start?
        </Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>Yes</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>No</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <View style={styles.button1}>
          <Text style={[styles.title4, styles.titleTypo1]}>Book ride!</Text>
        </View>
      </View>
      <View style={[styles.selection1, styles.inputSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo1]}>
          Different from Home?
        </Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>Yes</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>No</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1@3x.png")}
      />
      <View style={[styles.rectangleParent, styles.topBarPosition]}>
        <View style={[styles.groupChild, styles.topBarPosition]} />
        <View style={[styles.topBar, styles.topBarPosition]}>
          <Text style={[styles.title6, styles.titleTypo]}>Ride!</Text>
          <Pressable
            style={styles.icLeft}
            onPress={() => navigation.navigate("Driver")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icleft3@3x.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.componentChild, styles.iconLayout]} />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2@3x.png")}
        />
        <View style={[styles.selection2, styles.inputSpaceBlock]}>
          <Text style={[styles.title7, styles.titleTypo]}>
            Your ride has been confirmed!
          </Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <Pressable
          style={[
            styles.materialSymbolspersonOutlin,
            styles.automationIconPosition,
          ]}
          onPress={() => navigation.navigate("RiderInfo")}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector@3x.png")}
          />
        </Pressable>
        <Image
          style={styles.carIcon}
          resizeMode="cover"
          source={require("../assets/car@3x.png")}
        />
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation@3x.png")}
        />
        <Pressable
          style={[styles.automationIcon, styles.automationIconPosition]}
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
  inputSpaceBlock: {
    padding: Padding.p_xs,
    overflow: "hidden",
  },
  titleTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  chipFlexBox: {
    backgroundColor: Color.whitesmoke_100,
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarPosition: {
    height: 88,
    top: 0,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupLayout1: {
    width: 390,
    left: 0,
  },
  groupLayout: {
    height: 68,
    width: 390,
    left: 0,
    position: "absolute",
  },
  automationIconPosition: {
    top: 9,
    position: "absolute",
  },
  title: {
    color: Color.typePrimary,
    alignSelf: "stretch",
  },
  text: {
    color: Color.gray_100,
    flex: 1,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  textfield: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    marginTop: 4,
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    width: 360,
  },
  booking: {
    top: 88,
    alignItems: "center",
    overflow: "hidden",
    left: 15,
    position: "absolute",
    backgroundColor: Color.white,
  },
  input1: {
    top: 174,
    justifyContent: "center",
    width: 360,
    left: 15,
    position: "absolute",
  },
  input2: {
    top: 338,
    height: 74,
    justifyContent: "center",
    width: 360,
    left: 15,
    position: "absolute",
  },
  text3: {
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
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selection: {
    top: 406,
    width: 360,
    alignItems: "center",
    left: 15,
    position: "absolute",
  },
  title4: {
    color: Color.white,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    top: 751,
    height: 137,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    width: 360,
    overflow: "hidden",
    left: 15,
    position: "absolute",
  },
  selection1: {
    top: 260,
    width: 360,
    alignItems: "center",
    left: 15,
    position: "absolute",
  },
  image1Icon: {
    top: 494,
    left: 37,
    width: 315,
    height: 243,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "rgba(240, 240, 240, 0)",
    width: 390,
    left: 0,
  },
  title6: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    display: "flex",
    width: 296,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    marginTop: 0,
  },
  icLeft: {
    top: "50%",
    right: 105,
    width: 24,
    height: 24,
    position: "absolute",
  },
  topBar: {
    width: 360,
    left: 15,
  },
  rectangleParent: {
    width: 390,
    left: 0,
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gainsboro_200,
    position: "absolute",
  },
  image2Icon: {
    height: "66.67%",
    width: "79.74%",
    top: "12.92%",
    right: "10.26%",
    bottom: "20.41%",
    left: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  title7: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "center",
    alignSelf: "stretch",
  },
  selection2: {
    height: "17.42%",
    width: "92.31%",
    top: "2.81%",
    right: "3.85%",
    bottom: "79.78%",
    left: "3.85%",
    alignItems: "center",
    position: "absolute",
  },
  rectangleGroup: {
    top: 276,
    height: 534,
    display: "none",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.gainsboro_100,
    top: 0,
    height: 68,
  },
  rectangleWrapper: {
    top: 0,
    height: 68,
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
    overflow: "hidden",
  },
  carIcon: {
    top: 5,
    left: 164,
    width: 63,
    height: 61,
    position: "absolute",
  },
  automationIcon: {
    left: 299,
    width: 48,
    height: 48,
  },
  groupParent: {
    top: 775,
  },
  rider: {
    height: 845,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Rider;
