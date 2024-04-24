import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomNavbar = ({ onLeftPress, onRightPress }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
      <Icon name="home" size={30} color="#4E5053" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
      <Icon name="cart" size={30} color="#4E5053"  />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
      <Icon name="heart" size={30} color="#4E5053" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
      <Icon name="notifications" size={30} color="#4E5053"  />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor:"rgba(33, 38, 46, 1)",
   
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default CustomNavbar;
