import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity,ScrollView, TextInput, SafeAreaView, Image } from "react-native";
import CustomNavbar from "./CustomNavbar";

const HomePagee = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const data = [
    { id: "1", title: "All" },
    { id: "2", title: "Cappuccino" },
    { id: "3", title: "Espresso" },
    { id: "4", title: "Americano" },
    { id: "5", title: "Latte" },
    { id: "6", title: "Flat ...." },
    // Add more categories as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  // Sample data for the swipable list
  const swipableData = [
    { id: "1", text: "Cappuccino", price: "$10.99",additionalText: "With Steamed Milk", image: require("./l1.png") },
    { id: "2", text: "Cappuccino", price: "$10.99",additionalText: "With Foam", image: require("./l2.png") },
    { id: "3", text: "Item 2", image: require("./l1.png") },
    { id: "4", text: "Item 3", image: require("./l1.png") },
    // Add more items as needed
  ];
    // Sample data for the swipable list
    const swipableData1 = [
      { id: "1", text: "Cappuccino0", price: "$10.99",additionalText: "With Steamed Milk", image: require("./l1.png") },
      { id: "2", text: "Cappuccino", price: "$10.99",additionalText: "With Foam", image: require("./l2.png") },
      { id: "3", text: "Item 2", image: require("./l1.png") },
      { id: "4", text: "Item 3", image: require("./l1.png") },
      // Add more items as needed
    ];
  const renderSwipableItem = ({ item }) => (
    <View style={styles.swipableItem}  colors={['#4c669f', '#3b5998', '#192f6a']}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.swipableItemImage} />
        <Text style={styles.swipableItemText}>{item.text}</Text>
        <Text style={styles.additionalText}>{item.additionalText}</Text>
        <View style={styles.priceContainer}>
         
          <View style={styles.buyContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
            <TouchableOpacity style={styles.priceButton}>
              <Image source={require("./add.png")} style={styles.buyNowImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  const renderSwipableItem1 = ({ item }) => (
    <View style={styles.swipableItem}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.swipableItemImage} />
        <Text style={styles.swipableItemText}>{item.text}</Text>
        <Text style={styles.additionalText}>{item.additionalText}</Text>
        <View style={styles.priceContainer}>
         
          <View style={styles.buyContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
            <TouchableOpacity style={styles.priceButton}>
              <Image source={require("./add.png")} style={styles.buyNowImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <Image source={require('./Rectangleleft.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./Rectangleright.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.head}>Find the Best</Text>
      <Text style={styles.head}>Coffee For You</Text>
      <View style={styles.searchContainer}>
        <Image
          source={require('./search.png')} // Adjust the path according to your project structure
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#AAA" 
          placeholder="Find your Coffee..."
        />
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={swipableData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.swipableList}
        renderItem={renderSwipableItem}
        keyExtractor={(item) => item.id}
      />
       <Text style={styles.head1}>Coffee beans</Text>
      <FlatList
        data={swipableData1}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.swipableList}
        renderItem={renderSwipableItem}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
      <CustomNavbar
        onLeftPress={() => {} /* Add your left button logic here */}
        onRightPress={() => {} /* Add your right button logic here */}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor:"#141921",
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    color:'#FFFFFF'
  },
  head1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop:10,
    color:'#FFFFFF'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor:'rgba(33, 38, 46, 1)',

    paddingHorizontal: 10,
    width: 350,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categoryList: {
    marginTop: 20,
    paddingLeft: 20,
    
  },
  categoryItem: {
    backgroundColor: "#141921",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 18,
    color:'#52555A',
    fontWeight:"bold"
   
  },
  swipableList: {
    marginTop: 20,
    
   
  },
  swipableItem: {
    flexDirection: 'column',
    marginLeft: 20,
    width: 150, // Adjust the width of each item as needed
    alignItems: 'center',
    backgroundColor:"rgba(37, 42, 50, 1)",
    padding:10,
    borderRadius:10,
  },
  swipableItemImage: {
    width: 130,
    height: 130,
    borderRadius: 10, // Adjust the border radius of the image
  },
  swipableItemText: {
    marginTop: 10,
    marginBottom: 5,
    fontSize:25,
    color:'#FFFFFF'
  },
  additionalText:{
    color:'#FFFFFF'
  },
  buyContainer: {
    flexDirection: 'row', // Align the price and buy image in the same row
    alignItems: 'center', 
    marginTop:10// Align items vertically in the center
  },
  priceButton: {
    marginRight: 5,
    marginLeft: 40

  },
  priceText: {
   fontSize:30,
   color:'#FFFFFF'

  },
  buyNowImage: {
    width: 30, // Adjust the width of the image
    height: 30, // Adjust the height of the image
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default HomePagee;
