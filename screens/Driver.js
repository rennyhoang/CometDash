import * as React from "react";
import { Text, Image, StyleSheet, View, Pressable, ScrollView } from "react-native";
import Driver1 from "../components/Driver1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Driver = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.driver}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Drive!</Text>
        <Pressable
          style={styles.icLeft}
          onPress={() => navigation.navigate("Group")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icleft1.png")}
          />
        </Pressable>
      </View>
      <ScrollView>
        <Driver1 />
      </ScrollView>
      <View style={styles.materialSymbolspersonOutlinParent}>
        <Pressable
          style={[
            styles.materialSymbolspersonOutlin,
            styles.automationPosition,
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
        <Pressable
          style={[styles.automation, styles.automationPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/automation.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  automationPosition: {
    top: 9,
    position: "absolute",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  automation: {
    left: 299,
    width: 48,
    height: 48,
  },
  materialSymbolspersonOutlinParent: {
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 68,
    marginTop: 240,
  },
  driver: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    width: "100%",
  },
  icLeft: {
    top: "50%",
    right: 76,
    width: 24,
    height: 24,
    position: "absolute",
  },
  topBar: {
    height: 88,
    width: 360,
    backgroundColor: Color.white,
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    width: 296,
    justifyContent: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.typePrimary,
    position: "absolute",
    alignItems: "center",
  },
});

export default Driver;

