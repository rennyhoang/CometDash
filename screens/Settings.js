import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import Settings1 from "../components/Settings1";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Settings1 />
      <View style={styles.materialSymbolspersonOutlinParent}>
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
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("Rider")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/car1.png")}
          />
        </Pressable>
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation1.png")}
        />
        <Image
          style={[styles.automationIcon, styles.automationIconPosition]}
          resizeMode="cover"
          source={require("../assets/automation1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  automationIconPosition: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  car: {
    left: 164,
    top: 5,
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
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 68,
    marginTop: 230,
  },
  settings: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    paddingLeft: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
