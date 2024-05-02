import React from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import InfoCard from "@/components/infoCard";
import HeaderVector from "@/components/headerVector";
import VerificationCard from "@/components/VerificationCard";
export default function VerificationProduct() {
    return (
        <View style={styles.container}>
        <HeaderVector />
        <InfoCard style={styles.InfoContainer}>
            <VerificationCard/>
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
    InfoContainer:{
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color:'#80C583',
    },
    vector:{
        position: "absolute",
        top: 25,
    }
});