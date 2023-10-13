import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Header from "./components/molecules/header";
import React, { useState, useEffect } from "react";
import IntroLayout from "./intro/_layout";

export default function IntroLocation() {
  return (
    <View style={styles.container}>
      <IntroLayout>
        <Text style={styles.header}>Allow use of location?</Text>
        <Link href="/news">
          <Pressable style={styles.button}>
            <Text style={styles.text}>Yes</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>No</Text>
          </Pressable>
        </Link>
      </IntroLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "rgba(125, 125, 125, .6)",
    marginTop: 24,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
});