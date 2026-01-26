import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Bmr() {
  //สร้าง state สำหรับเก็บค่า เพศ น้ำหนัก ส่วนสูง อายุ BMI และผลลัพธ์ และการแปรผล
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("0");

  //ฟังก์ชันคำนวณ BMR สำหรับผู้ชาย BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) – (6.8 x อายุ)
  //ฟังก์ชันคำนวณ BMR สำหรับผู้หญิง BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) – (4.7 x อายุ
  const calculateBmr = () => {
    if (!weight || !height || !age) {
      Alert.alert("ข้อผิดพลาด", "กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (gender === "male") {
      const bmr =
        66 +
        13.7 * parseFloat(weight) +
        5 * parseFloat(height) -
        6.8 * parseFloat(age);
      setResult(bmr.toFixed(2));
    } else if (gender === "female") {
      const bmr =
        665 +
        9.6 * parseFloat(weight) +
        1.8 * parseFloat(height) -
        4.7 * parseFloat(age);
      setResult(bmr.toFixed(2));
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <ImageBackground
              source={require("../assets/images/bmr.jpg")}
              resizeMode="cover"
              style={styles.headerBackground}
            >
              <View style={styles.overlay}>
                <Text style={styles.title}>BMR Calculator</Text>
                <Text style={styles.subtitle}>
                  อัตราการเผาผลาญพลังงานขั้นพื้นฐานของร่างกาย
                </Text>
              </View>
            </ImageBackground>

            <View style={styles.formContainer}>
              <Text style={styles.label}>เพศ (Gender)</Text>

              <View style={styles.row}>
                <TouchableOpacity
                  style={[
                    styles.card,
                    gender === "male" && styles.selectedCard,
                  ]}
                  onPress={() => setGender("male")}
                  activeOpacity={0.8}
                >
                  <View style={[styles.circle, { backgroundColor: "#AED581" }]}>
                    <Image
                      source={require("../assets/images/man.png")}
                      style={styles.icon}
                    />
                  </View>
                  <Text
                    style={[
                      styles.cardText,
                      gender === "male" && styles.selectedText,
                    ]}
                  >
                    ชาย
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.card,
                    gender === "female" && styles.selectedCard,
                  ]}
                  onPress={() => setGender("female")}
                  activeOpacity={0.8}
                >
                  <View style={[styles.circle, { backgroundColor: "#FFCC80" }]}>
                    <Image
                      source={require("../assets/images/woman.png")}
                      style={styles.icon}
                    />
                  </View>
                  <Text
                    style={[
                      styles.cardText,
                      gender === "female" && styles.selectedText,
                    ]}
                  >
                    หญิง
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>น้ำหนัก (kg)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="เช่น 60"
                    keyboardType="numeric"
                    value={weight.toString()}
                    onChangeText={(text) => setWeight(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>ส่วนสูง (cm)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="เช่น 170"
                    keyboardType="numeric"
                    value={height.toString()}
                    onChangeText={(text) => setHeight(text)}
                  />
                </View>
              </View>
              <Text style={styles.label}>อายุ (ปี)</Text>
              <TextInput
                style={styles.input}
                placeholder="เช่น 25"
                keyboardType="numeric"
                value={age.toString()}
                onChangeText={(text) => setAge(text)}
              />
              <TouchableOpacity onPress={calculateBmr}>
                <Text style={styles.calculateButton}>คํานวณหาค่า BMR</Text>
              </TouchableOpacity>
              <View style={styles.cardresult}>
                <Text
                  style={[
                    styles.textresult,
                    { fontSize: 20, color: "#000000" },
                  ]}
                >
                  BMR
                </Text>
                <Text
                  style={[
                    styles.textresult,
                    { fontSize: 40, color: "#f5a7b6" },
                  ]}
                >
                  {result}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#7c7c7c",
                    fontFamily: "Prompt_400Regular",
                  }}
                >
                  แคลอรี่ / วัน
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Prompt_400Regular",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: -20,
    padding: 20,
    paddingBottom: 50,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    fontFamily: "Prompt_700Bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",

    elevation: 3,
    shadowColor: "#535353",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 20,
  },

  selectedCard: {
    borderColor: "#df4386",
    backgroundColor: "#f5cfd6",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedText: {
    color: "#df4386",
  },
  inputContainer: {
    marginBottom: 20,
    width: "48%",
  },
  inputLabel: {
    fontSize: 16,
    color: "#999999",
    marginBottom: 10,
    fontFamily: "Prompt_700Bold",
  },
  input: {
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    fontFamily: "Prompt_400Regular",
    backgroundColor: "#ffffff",
    elevation: 3,

    shadowColor: "#535353",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: "transparent",
  },
  calculateButton: {
    backgroundColor: "#f5a7b6",
    padding: 15,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Prompt_700Bold",
    fontSize: 18,
  },
  cardresult: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textresult: {
    marginBottom: 5,
    fontFamily: "Prompt_700Bold",
  },
});
