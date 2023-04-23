import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tab1 = ({
  icon,
  title,
  propDisplay,
  propMarginLeft,
  propMarginLeft1,
}) => {
  const tabStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propDisplay, propMarginLeft]);

  const backgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <View style={[styles.tab, tabStyle]}>
      <View style={[styles.background, backgroundStyle]} />
      <Text style={[styles.icon, styles.iconFlexBox]}>{icon}</Text>
      <Text style={[styles.title, styles.iconFlexBox]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    marginTop: 4,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    marginLeft: -24,
    top: 4,
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    height: 48,
    zIndex: 0,
    width: 48,
  },
  icon: {
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    zIndex: 1,
    width: 48,
  },
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    zIndex: 2,
  },
  tab: {
    flex: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    padding: Padding.p_9xs,
    display: "none",
    alignItems: "center",
  },
});

export default Tab1;
