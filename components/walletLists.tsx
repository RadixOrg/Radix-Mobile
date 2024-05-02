import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { walletsList } from "@/assets/data";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { router } from "expo-router";
import { Web3Modal } from "@web3modal/wagmi-react-native";
import { useAccount } from "wagmi";
interface Wallet {
  id: number;
  name: string;
  icon: any; // You might want to replace 'any' with a more specific type
}
const WalletLists = () => {
  const { open } = useWeb3Modal();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const handleConnecting = async (
    wallet: Wallet,
    open: () => Promise<void>
  ) => {
    try {
      await open();
      console.log("Connected wallet :", wallet.name, isConnected);
      if (isConnecting) {
        console.log(`Connecting to ${wallet.name}...`);
      } else if (isConnected) {
        console.log(`Wallet connected successfully: ${wallet.name}`);
        Alert.alert(
          "Connection Successful",
          `You are now connected with ${wallet.name}`
        );
        router.push("/VerificationProduct");
      } else if (isDisconnected) {
        console.log(`Failed to connect: ${wallet.name}`);
        Alert.alert(
          "Connection Failed",
          `Could not connect to ${wallet.name}. Please try again.`
        );
      }
    } catch (error) {
      console.error(`Connection error with ${wallet.name}:`, error);
      Alert.alert(
        "Connection Error",
        `An error occurred while connecting to ${wallet.name}.`
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* <W3mButton /> */}
      <View style={styles.rowIcon}>
        <Web3Modal />
        {walletsList.slice(0, 4).map((wallet, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconWallet}
            onPress={() => handleConnecting(wallet, open)}
          >
            <Image source={wallet.icon} style={styles.iconWallet} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default WalletLists;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    position: "absolute",
    borderRadius: 50,
    bottom: 0,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  nameWallet: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#80C583",
  },
  iconWallet: {
    width: 50,
    height: 50,
  },
  rowIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
});
