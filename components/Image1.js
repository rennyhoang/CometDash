import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Image1 = ({
  title,
  rectangle3344Height,
  rectangle3347Top,
  rectangle3347Height,
  rectangle3340MarginTop,
  propColor,
  propBottom,
}) => {
  const imageStyle = useMemo(() => {
    return {
      ...getStyleValue("height", rectangle3344Height),
    };
  }, [rectangle3344Height]);

  const imgStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle3347Top),
      ...getStyleValue("height", rectangle3347Height),
    };
  }, [rectangle3347Top, rectangle3347Height]);

  const descriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", rectangle3340MarginTop),
    };
  }, [rectangle3340MarginTop]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const paginationStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
    };
  }, [propBottom]);

  return (
    <View style={[styles.image, imageStyle]}>
      <View style={[styles.img, imgStyle]} />
      <View
        style={[
          styles.description,
          styles.paginationPosition,
          descriptionStyle,
        ]}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <View
        style={[styles.pagination, styles.paginationPosition, paginationStyle]}
      >
        <View style={[styles.paginationChild, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  paginationLayout: {
    height: 4,
    borderRadius: Border.br_81xl,
  },
  img: {
    top: 8,
    left: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro_200,
    width: 336,
    height: 115,
    position: "absolute",
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.typePrimary,
    textAlign: "center",
  },
  description: {
    marginTop: -20.5,
    marginLeft: -140,
    top: "50%",
    borderRadius: Border.br_5xs,
    width: 280,
    padding: Padding.p_3xs,
  },
  paginationChild: {
    backgroundColor: Color.white,
    width: 20,
  },
  paginationItem: {
    backgroundColor: Color.gray_400,
    width: 4,
    marginLeft: 4,
  },
  pagination: {
    marginLeft: -22,
    bottom: 16,
  },
  image: {
    width: 360,
    height: 131,
    overflow: "hidden",
  },
});

export default Image1;
