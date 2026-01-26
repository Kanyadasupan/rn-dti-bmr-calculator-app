import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // โหลดหน้าจอ
  useEffect(() => {
    const timer = setTimeout(() => {router.replace("/bmi");}, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        
        <View style={[styles.circle, styles.circle3]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle1]} />

        <View style={styles.imageWrapper}>
          <Image source={require("@/assets/images/bmi.jpg")} style={styles.profileImage} />
        </View>
      </View>

      <Text style={styles.title}>BMR Calculator</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5c2cb",
    alignItems: "center",
    justifyContent: "center",
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "white",
  },
  circle1: {
    width: 200,
    height: 200,
    opacity: 0.3,
  },
  circle2: {
    width: 250,
    height: 250,
    opacity: 0.15,
  },
  circle3: {
    width: 300,
    height: 300,
    opacity: 0.08,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "white",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  title: {
    fontSize: 30,
    color: "#df4386",
    marginTop: 100,
    fontFamily: "Prompt_700Bold",
  },
  loader: {
    marginTop: 20,
  },
});