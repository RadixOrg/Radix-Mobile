import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HeaderVector from "@/components/headerVector";
import InfoCard from "@/components/infoCard";
import WalletLists from "@/components/walletLists";
export default function ConnectWallet() {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderVector />
      <InfoCard>
        <TouchableOpacity style={styles.button} onPress={() => setIsClicked(true)}>
          <Text style={styles.title}>Connetti il tuo wallet </Text>
        </TouchableOpacity>
        {isClicked && (
          <WalletLists />
        )}
      </InfoCard>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color:'#80C583',
  },
  button:{
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",

    height: 70,
    width: 250,
    padding: 20,
    borderRadius: 50,
    marginTop: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    position: "absolute",
    top: 100,
  },
  vector: {
    position: "absolute",
    top: 25,
  },
});
