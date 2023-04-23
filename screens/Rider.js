import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import Input1 from "../components/Input1";
import Input2 from "../components/Input2";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const { height } = Dimensions.get("window");

const Rider = () => {
  state = {
    screenHeight: 0,
  };
  const navigation = useNavigation();

  return (
    <View style={styles.rider}>
      <ScrollView automaticallyAdjustContentInsets={false} automaticallyAdjustContentScrollIndicatorInsets={false}>
      <View style={styles.booking}>
        <Input1 title="Start Time" propWidth="unset" propAlignSelf="stretch" />
      </View>
      <Input2 title="Start Address" propTop={174} />
      <Input2 title="End Address" propTop={338} propHeight={74} />
      <View style={[styles.selection, styles.selectionSpaceBlock]}>
        <Text style={[styles.title, styles.textClr]}>
          Different from Start?
        </Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Yes</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>No</Text>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.selectionLayout]}>
        <View style={[styles.button1, styles.chipFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo1]}>Book ride!</Text>
        </View>
      </View>
      <View style={[styles.selection1, styles.selectionSpaceBlock]}>
        <Text style={[styles.title, styles.textClr]}>Different from Home?</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Yes</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>No</Text>
          </View>
        </View>
      </View>

      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />

      <ScrollView>
        <View style={{height:900}} />
      </ScrollView>

      </ScrollView>
      <View style={[styles.topBarWrapper, styles.parentPosition]}>
        <View style={styles.topBar}>
          <Text style={[styles.title3, styles.titleTypo]}>Ride!</Text>
          <Image
            style={[styles.icLeftIcon, styles.leftLayout]}
            resizeMode="cover"
            source={require("../assets/icleft3.png")}
          />
          <Pressable
            style={[styles.icLeft, styles.leftLayout]}
            onPress={() => navigation.navigate("Driver")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icleft1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.componentChild, styles.iconLayout]} />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.selection2, styles.selectionSpaceBlock]}>
          <Text style={[styles.title4, styles.titleTypo]}>
            Your ride has been confirmed!
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.materialSymbolspersonOutlinParent,
          styles.parentPosition,
        ]}
      >
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
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={styles.carIcon}
          resizeMode="cover"
          source={require("../assets/car.png")}
        />
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation.png")}
        />
        <Pressable
          style={[styles.automationIcon, styles.automationIconPosition]}
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
  selectionSpaceBlock: {
    padding: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  textClr: {
    color: Color.typePrimary,
    textAlign: "left",
  },
  chipFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectionLayout: {
    width: 360,
    left: 15,
  },
  titleTypo1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  parentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  leftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  automationIconPosition: {
    top: 9,
    position: "absolute",
  },
  booking: {
    top: 88,
    alignItems: "center",
    overflow: "hidden",
    width: 360,
    left: 15,
    position: "absolute",
    backgroundColor: Color.white,
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  chip: {
    display: "none",
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flex: 1,
  },
  chip1: {
    marginLeft: 8,
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flex: 1,
  },
  chipGroup: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  selection: {
    top: 406,
    width: 360,
    left: 15,
  },
  title1: {
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
    top: 751,
    height: 137,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
    position: "absolute",
  },
  selection1: {
    top: 260,
    width: 360,
    left: 15,
  },
  image1Icon: {
    top: 494,
    left: 37,
    width: 315,
    height: 243,
    position: "absolute",
  },
  title3: {
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    display: "flex",
    width: 296,
    top: 44,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icLeftIcon: {
    marginTop: 0,
    top: "50%",
    right: 105,
  },
  icLeft: {
    left: 213,
    top: 44,
  },
  topBar: {
    height: 88,
    alignSelf: "stretch",
  },
  topBarWrapper: {
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
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
  title4: {
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
  },
  rectangleParent: {
    top: 276,
    height: 534,
    display: "none",
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
  materialSymbolspersonOutlinParent: {
    top: 775,
    backgroundColor: Color.gainsboro_100,
    height: 68,
  },
  rider: {
    height: 845,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Rider;
