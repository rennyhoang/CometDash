import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const DriverInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.driverInfo}>
      <View style={styles.page}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Driver Information</Text>
          <Pressable
            style={[styles.icLeft, styles.leftLayout]}
            onPress={() => navigation.navigate("GroupInfo")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icleft1@3x.png")}
            />
          </Pressable>
        </View>
        <View style={styles.image}>
          <View style={styles.img} />
          <View style={[styles.description, styles.paginationPosition]}>
            <Text style={styles.title1}>Driver Profile Photo</Text>
          </View>
          <View style={[styles.pagination, styles.paginationPosition]}>
            <View style={[styles.paginationChild, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
            <View style={[styles.paginationItem, styles.paginationLayout]} />
          </View>
        </View>
        <View style={styles.bulletList}>
          <Text style={styles.titleTypo}>Driver Stats</Text>
          <View style={[styles.bullet, styles.bulletSpaceBlock]}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.title3Position]}>Title</Text>
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Subtitle</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>😀</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.title3Position]}>
              Miles Driven
            </Text>
            <Text style={[styles.subtitle, styles.subtitleTypo]}>100,000</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🚗</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.title3Position]}>
              Average Rating
            </Text>
            <Text style={[styles.subtitle, styles.subtitleTypo]}>4.9</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>⭐️</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.title3Position]}>
              Total Points
            </Text>
            <Text style={[styles.subtitle, styles.subtitleTypo]}>500</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>🏆</Text>
          </View>
          <View style={styles.bulletSpaceBlock}>
            <View style={[styles.background, styles.backgroundLayout]} />
            <Text style={[styles.title3, styles.title3Position]}>Reviews</Text>
            <Text style={[styles.subtitle, styles.subtitleTypo]}>213</Text>
            <View style={[styles.underline, styles.icon1Position]} />
            <Text style={[styles.icon1, styles.icon1Position]}>💬</Text>
          </View>
        </View>
        <View style={styles.showcase}>
          <View style={styles.top}>
            <Text style={[styles.title8, styles.titleTypo]}>Reviews</Text>
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>
              Subtitle
            </Text>
            <View style={styles.button}>
              <Text style={styles.title9}>View All Reviews</Text>
              <Image
                style={styles.icon6}
                resizeMode="cover"
                source={require("../assets/icon@3x.png")}
              />
            </View>
          </View>
          <View style={styles.reviews}>
            <View style={[styles.reviewCard, styles.reviewCardSpaceBlock]}>
              <View style={styles.rating}>
                <View style={styles.avatar}>
                  <Image
                    style={[styles.avatarChild, styles.carPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-87@3x.png")}
                  />
                  <View style={[styles.avatarItem, styles.avatarItemLayout]} />
                </View>
                <Text style={[styles.username, styles.subtitleTypo]}>
                  Username
                </Text>
                <View style={styles.vectorWrapper}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector2@3x.png")}
                  />
                </View>
              </View>
              <Text style={[styles.content, styles.contentSpaceBlock]}>
                I recently discovered Daraz and have been blown away by the
                selection of products and the ease of use of the platform. I
                love being able to select from a variety of products
              </Text>
              <View style={[styles.frameParent, styles.contentSpaceBlock]}>
                <View style={styles.icRecommendParent}>
                  <Image
                    style={styles.avatarItemLayout}
                    resizeMode="cover"
                    source={require("../assets/icrecommend@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>32</Text>
                </View>
                <View style={styles.icRecommendGroup}>
                  <Image
                    style={styles.avatarItemLayout}
                    resizeMode="cover"
                    source={require("../assets/icrecommend4@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>2</Text>
                </View>
              </View>
            </View>
            <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
              <View style={styles.rating}>
                <View style={styles.avatar}>
                  <Image
                    style={[styles.avatarChild, styles.carPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-87@3x.png")}
                  />
                  <View style={[styles.avatarItem, styles.avatarItemLayout]} />
                </View>
                <Text style={[styles.username, styles.subtitleTypo]}>
                  Username
                </Text>
                <View style={styles.vectorWrapper}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector2@3x.png")}
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
                    source={require("../assets/icrecommend@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>32</Text>
                </View>
                <View style={styles.icRecommendGroup}>
                  <Image
                    style={styles.avatarItemLayout}
                    resizeMode="cover"
                    source={require("../assets/icrecommend4@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>2</Text>
                </View>
              </View>
            </View>
            <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
              <View style={styles.rating}>
                <View style={styles.avatar}>
                  <Image
                    style={[styles.avatarChild, styles.carPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-87@3x.png")}
                  />
                  <View style={[styles.avatarItem, styles.avatarItemLayout]} />
                </View>
                <Text style={[styles.username, styles.subtitleTypo]}>
                  Username
                </Text>
                <View style={styles.vectorWrapper}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector2@3x.png")}
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
                    source={require("../assets/icrecommend2@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>32</Text>
                </View>
                <View style={styles.icRecommendGroup}>
                  <Image
                    style={styles.avatarItemLayout}
                    resizeMode="cover"
                    source={require("../assets/icrecommend5@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>2</Text>
                </View>
              </View>
            </View>
            <View style={[styles.reviewCard1, styles.reviewCardSpaceBlock]}>
              <View style={styles.rating}>
                <View style={styles.avatar}>
                  <Image
                    style={[styles.avatarChild, styles.carPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-87@3x.png")}
                  />
                  <View style={[styles.avatarItem, styles.avatarItemLayout]} />
                </View>
                <Text style={[styles.username, styles.subtitleTypo]}>
                  Username
                </Text>
                <View style={styles.vectorWrapper}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector2@3x.png")}
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
                    source={require("../assets/icrecommend2@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>32</Text>
                </View>
                <View style={styles.icRecommendGroup}>
                  <Image
                    style={styles.avatarItemLayout}
                    resizeMode="cover"
                    source={require("../assets/icrecommend5@3x.png")}
                  />
                  <Text style={[styles.text, styles.subtitleTypo]}>2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.icLeft1, styles.leftLayout]}
        onPress={() => navigation.navigate("Leaderboard")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icleft2@3x.png")}
        />
      </Pressable>
      <View style={styles.groupParent}>
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
            style={styles.backgroundLayout}
            resizeMode="cover"
            source={require("../assets/vector@3x.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.car, styles.carPosition]}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/car@3x.png")}
          />
        </Pressable>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
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
  paginationLayout: {
    height: 4,
    borderRadius: Border.br_81xl,
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
  title3Position: {
    zIndex: 1,
    alignSelf: "stretch",
  },
  subtitleTypo: {
    color: Color.gray_300,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  icon1Position: {
    left: 0,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    color: Color.gray_200,
    alignSelf: "stretch",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  reviewCardSpaceBlock: {
    paddingVertical: Padding.p_base,
    width: 220,
    backgroundColor: Color.whitesmoke_100,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  carPosition: {
    top: 5,
    position: "absolute",
  },
  avatarItemLayout: {
    height: 16,
    width: 16,
  },
  contentSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
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
    left: 71,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    display: "flex",
    width: 204,
    height: 22,
    justifyContent: "center",
    textAlign: "center",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    marginTop: -2,
  },
  icLeft: {
    right: 85,
    top: "50%",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
  },
  img: {
    top: 12,
    left: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro_200,
    height: 336,
    width: 336,
    position: "absolute",
  },
  title1: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "center",
    flex: 1,
  },
  description: {
    marginTop: -21,
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
    width: 4,
    marginLeft: 4,
    backgroundColor: Color.gray_100,
  },
  pagination: {
    marginLeft: -22,
    bottom: 20,
    flexDirection: "row",
  },
  image: {
    height: 360,
    width: 360,
    overflow: "hidden",
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
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.typePrimary,
  },
  subtitle: {
    zIndex: 2,
    alignSelf: "stretch",
    color: Color.gray_300,
  },
  underline: {
    bottom: 0,
    height: 1,
    zIndex: 3,
    backgroundColor: Color.gray_400,
    width: 336,
  },
  icon1: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 4,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_200,
    left: 0,
    alignSelf: "stretch",
    top: "50%",
    textAlign: "center",
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    padding: Padding.p_xs,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  title8: {
    zIndex: 0,
  },
  subtitle5: {
    zIndex: 1,
    alignSelf: "stretch",
    display: "none",
  },
  title9: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.black,
  },
  icon6: {
    width: 12,
    height: 12,
  },
  button: {
    marginTop: -10,
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
    flexDirection: "row",
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  top: {
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_71xl,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  avatarChild: {
    left: 8,
    width: 8,
    height: 8,
  },
  avatarItem: {
    top: 15,
    left: 4,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_100,
    position: "absolute",
  },
  avatar: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_81xl,
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
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.typePrimary,
  },
  text: {
    marginLeft: 4,
    width: 24,
    color: Color.gray_300,
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
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  showcase: {
    height: 211,
    paddingBottom: Padding.p_88xl,
    borderRadius: Border.br_5xs,
    width: 360,
    overflow: "hidden",
  },
  page: {
    top: 23,
    left: 15,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.white,
  },
  icLeft1: {
    left: 363,
    top: 623,
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
  car: {
    left: 164,
    width: 63,
    height: 61,
  },
  automation: {
    left: 299,
    width: 48,
    height: 48,
  },
  groupParent: {
    top: 778,
    left: 2,
    height: 68,
    width: 390,
    position: "absolute",
  },
  driverInfo: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default DriverInfo;
