import React, { useState } from "react";
import  { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Image } from "react-native";
import CustomNavbar from "./CustomNavbar";

const Cart = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image source={require('./l4.png')} style={styles.iconImage} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemName}>Cappuccino</Text>
            <Text style={styles.itemDescription}>With Steamed Milk</Text>
            <TouchableOpacity style={styles.sizeButton}><Text style={styles.buttonText}>Medium Roasted</Text></TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#141921",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconImage: {
    width: '30%',
    height: 120,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  itemDescription: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  sizeButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default Cart;
