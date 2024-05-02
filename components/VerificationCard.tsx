import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useState } from "react";
const VerificationCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      {!isClicked && (
        <>
          <FontAwesome name="check-circle-o" size={200} color="#3670BC" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsClicked(true)}
          >
            <Text style={styles.title}>Verifica Prodotto</Text>
          </TouchableOpacity>
        </>
      )}
      {isClicked && (
        <>
          <LottieView
            source={require("../assets/animations/ScanAnimation.json")}
            autoPlay
            loop
            style={{ width: 250, height: 250 }}
          />
          <Text style={[styles.title,{marginTop:50}]}>Pronto a scannerizzare</Text>
          <Text style={styles.subTitle}>
            Avvicina il Tag NFT
            </Text>
          </>
      )}
    </View>
  );
};
export default VerificationCard;
const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3670BC",
  },
  subTitle:{
    color: "#3670BC",
    fontSize: 14,
  },
  vector: {
    position: "absolute",
    top: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    height: 150,
    width: 250,
    borderRadius: 30,
    marginTop: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});
