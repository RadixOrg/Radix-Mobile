import React from 'react';
import { View, StyleSheet } from 'react-native';
type infoCardProps = {
    children: React.ReactNode;
    style?: object;
    };
const InfoCard = ({ children, style } : infoCardProps) => {
  return (
    <View style={[styles.infoCard, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    flex: 2,
    backgroundColor: "#D8FFDC",
    borderRadius: 60,
    width: "100%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default InfoCard;
