import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Padding, FontFamily, Color } from "../GlobalStyles";
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from '@expo/vector-icons';

const BottomBar = () => {
    const navigation = useNavigation();

const rider = () => {
    navigation.navigate("Rider")
}

const prof = () => {
    navigation.navigate("RiderInfo")
}
const settings = () => {
    navigation.navigate("Settings")
}

    return(
        <View style={styles.justifyContent}>
        <AppBar variant="bottom" position="relative" height="20%" width="100%" color="#dedbdb" style={styles.flexboxContainer}>
            <div style={styles.div} onClick={prof}>
            <IconButton icon={() => <Icon name="menu" size={40}/>  } style={styles.automationIcon} size="large"/>
            </div><div style={styles.div} onClick={rider}>
            <IconButton icon={() => <Icon name="car" size={40}/>} style={styles.automationIcon} size="large"/>
            </div>
            <div style={styles.div} onClick={settings}>
            <IconButton icon={() => <FontAwesome name="gears" size={40}/>} style={styles.automationIcon} size="large"/>
            </div>
        </AppBar>
        </View>
    )
}

const styles = StyleSheet.create({
    justifyContent: {
        flex: 1,
        justifyContent: 'flex-end',
        position: "absolute",
left:0,
bottom:0,
right:0,
      },
    flexboxContainer: {
        display: "flex",
        flexDirection: "row",
    },
    automationIcon: {
        marginHorizontal: "10%",
        zIndex: -100
    },
    div: {
        width: "33%"
    }
  });
export default BottomBar;