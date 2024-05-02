import React from "react";
import { View  , StyleSheet , Image } from "react-native";
import Logomini from "../assets/images/logoMini.svg";
import { backgroundImage } from "@/assets/data";

const HeaderVector = () => {
    return (
        <View style={styles.container}>
        <Image source={backgroundImage} style={styles.vector}/>
        <View style={styles.logo}>
          <Logomini width={80} height={80} />
        </View>
      </View>
    )
}
export default HeaderVector;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      position: "absolute",
      top: 100,
    },
    vector:{
      position: "absolute",
      top: 25,
    }
  });
  