import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Showcase = ({
  title,
  title1,
  vector,
  icRecommend,
  vector1,
  icRecommend1,
  vector2,
  icRecommend2,
  ellipse87,
  vector3,
  icRecommend3,
  icRecommendHeight,
}) => {
  const showcaseStyle = useMemo(() => {
    return {
      ...getStyleValue("height", icRecommendHeight),
    };
  }, [icRecommendHeight]);

  return (
    <View style={[styles.showcase, showcaseStyle]}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subtitle, styles.textTypo]}>Subtitle</Text>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.title1, styles.title1Typo]}>{title1}</Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={styles.reviews}>
        <View style={[styles.reviewCard, styles.reviewCardSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarChild}
                resizeMode="cover"
                source={require("../assets/ellipse-87.png")}
              />
              <View style={[styles.avatarItem, styles.avatarItemLayout]} />
            </View>
            <Text style={[styles.username, styles.textTypo]}>Username</Text>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={vector}
              />
            </View>
          </View>
          <Text style={[styles.content, styles.contentSpaceBlock]}>
            I recently discovered Daraz and have been blown away by the
            selection of products and the ease of use of the platform. I love
            being able to select from a variety of products
          </Text>
          <View style={[styles.frameParent, styles.contentSpaceBlock]}>
            <View style={styles.icRecommendParent}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={require("../assets/icrecommend.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>32</Text>
            </View>
            <View style={styles.icRecommendGroup}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={icRecommend}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarChild}
                resizeMode="cover"
                source={require("../assets/ellipse-87.png")}
              />
              <View style={[styles.avatarItem, styles.avatarItemLayout]} />
            </View>
            <Text style={[styles.username, styles.textTypo]}>Username</Text>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={vector1}
              />
            </View>
          </View>
          <Text style={[styles.content, styles.contentSpaceBlock]}>
            Absolutely amazing driver. Safe, courteous, and friendly.
          </Text>
          <View style={[styles.frameParent, styles.contentSpaceBlock]}>
            <View style={styles.icRecommendParent}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={require("../assets/icrecommend.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>32</Text>
            </View>
            <View style={styles.icRecommendGroup}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={icRecommend1}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarChild}
                resizeMode="cover"
                source={require("../assets/ellipse-87.png")}
              />
              <View style={[styles.avatarItem, styles.avatarItemLayout]} />
            </View>
            <Text style={[styles.username, styles.textTypo]}>Username</Text>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={vector2}
              />
            </View>
          </View>
          <Text style={[styles.content, styles.contentSpaceBlock]}>
            I always request this driver if I can. They are the best!
          </Text>
          <View style={[styles.frameParent, styles.contentSpaceBlock]}>
            <View style={styles.icRecommendParent}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={require("../assets/icrecommend2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>32</Text>
            </View>
            <View style={styles.icRecommendGroup}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={icRecommend2}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarChild}
                resizeMode="cover"
                source={ellipse87}
              />
              <View style={[styles.avatarItem, styles.avatarItemLayout]} />
            </View>
            <Text style={[styles.username, styles.textTypo]}>Username</Text>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={vector3}
              />
            </View>
          </View>
          <Text style={[styles.content, styles.contentSpaceBlock]}>
            Highly recommend, they are prompt and professional.
          </Text>
          <View style={[styles.frameParent, styles.contentSpaceBlock]}>
            <View style={styles.icRecommendParent}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={require("../assets/icrecommend2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>32</Text>
            </View>
            <View style={styles.icRecommendGroup}>
              <Image
                style={styles.avatarItemLayout}
                resizeMode="cover"
                source={icRecommend3}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  title1Typo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  reviewCardSpaceBlock: {
    paddingVertical: Padding.p_base,
    width: 220,
    backgroundColor: Color.whitesmoke_100,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
  avatarItemLayout: {
    height: 16,
    width: 16,
  },
  contentSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_100,
    zIndex: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  subtitle: {
    zIndex: 1,
    display: "none",
    alignSelf: "stretch",
    color: Color.gray_200,
  },
  title1: {
    color: Color.black,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  icon: {
    width: 12,
    height: 12,
  },
  button: {
    marginTop: -10,
    top: "50%",
    right: 16,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p_10xs,
    paddingBottom: Padding.p_11xs,
    zIndex: 2,
    position: "absolute",
  },
  top: {
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_71xl,
    justifyContent: "center",
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  avatarChild: {
    top: 5,
    left: 8,
    width: 8,
    height: 8,
    position: "absolute",
  },
  avatarItem: {
    top: 15,
    left: 4,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  avatar: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray_300,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  username: {
    marginLeft: 8,
  },
  vectorIcon: {
    width: 58,
    height: 10,
  },
  vectorWrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  content: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  text: {
    marginLeft: 4,
    width: 24,
  },
  icRecommendParent: {
    flexDirection: "row",
  },
  icRecommendGroup: {
    marginLeft: 12,
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  reviewCard: {
    display: "none",
  },
  reviewCard1: {
    marginLeft: 8,
  },
  reviews: {
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  showcase: {
    width: 360,
    height: 210,
    paddingBottom: Padding.p_88xl,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
});

export default Showcase;
