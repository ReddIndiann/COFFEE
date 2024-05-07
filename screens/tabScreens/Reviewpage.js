import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";

const Reviewpage = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require('./l3.png')} style={styles.backgroundImage}>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Image source={require('./back.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./fav.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainerr}>
            <View style={styles.sizeContainer}>
              <View style={styles.sizeButtonRowww}>
                <View style={styles.name}>
                  <Text style={styles.nameh}>Robusta Beans</Text>
                  <Text style={styles.namet}>From Africa</Text>
                </View>
                <View style={styles.icontab}>
                <Icon name="flame" size={20} color="#D17842" />

                  <Text style={styles.icontext}>Bean</Text>
                </View>
                <View style={styles.icontab}>
                  <Icon name="location" size={20} color="#D17842" />
                  <Text style={styles.icontext}>Africa</Text>
                </View>
              </View>
              <View style={styles.sizeButtonRoww}>
                <View style={styles.starContainer}>
                  <Icon name="star" size={30} color="#D17842" />
                  <Text style={styles.ratingText}>4.5</Text>
                  <Text style={styles.reviewCount}>(6,879)</Text>
                </View>
                <TouchableOpacity style={styles.sizeButtonnn}><Text style={styles.buttonTextt}>Meduim Roasted</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.head}>Description</Text>
        <Text style={styles.description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it </Text>
        <Text style={styles.head}>Size</Text>
        <View style={styles.sizeContainer}>
          <View style={styles.sizeButtonRow}>
            <TouchableOpacity 
              style={[
                styles.sizeButton, 
                selectedSize === '250gm' && styles.selectedButton
              ]}
              onPress={() => handleSizeSelection('250gm')}
            >
              <Text style={[styles.buttonText, selectedSize === '250gm' && styles.selectedButtonText]}>250gm</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.sizeButton, 
                selectedSize === '500gm' && styles.selectedButton
              ]}
              onPress={() => handleSizeSelection('500gm')}
            >
              <Text style={[styles.buttonText, selectedSize === '500gm' && styles.selectedButtonText]}>500gm</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.sizeButton, 
                selectedSize === '1000gm' && styles.selectedButton
              ]}
              onPress={() => handleSizeSelection('1000gm')}
            >
              <Text style={[styles.buttonText, selectedSize === '1000gm' && styles.selectedButtonText]}>1000gm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sizeButtonRoww}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Price</Text>
             <View style={styles.priceall}><View ><Text style={styles.pricesign} >$</Text>
            
             </View>
             <View><Text style={styles.priceValue}>10.00</Text>
            
             </View >
             </View>
            </View>
            <TouchableOpacity style={styles.sizeButtonn}>
              <Text style={styles.buttonText}>Add to cart</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141921",
  },
  backgroundContainer: {
    flex: 4,
    backgroundColor: 'transparent', // Make sure the background is transparent
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  contentContainer: {
    flex: 3, // Adjust this value to make the content container higher
    paddingHorizontal: 20,
    justifyContent: 'center', // Center content vertically
  },
  contentContainerr: {
   
    height:190,
    marginTop:160,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  head: {
    fontSize: 20,
    fontWeight: '500',
    color: '#AEAEAE',
    marginBottom: 10, // Add some margin between sections
    marginTop:10
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    
    marginTop: 10, // Add some margin between sections
  },
  sizeContainer: {
    marginTop: 10, // Add some margin between sections
  },
  sizeButtonRow: {
    flexDirection: 'row', // Make children elements arranged horizontally
    justifyContent: 'space-between', // Add space between buttons
    marginBottom:20
  },
  sizeButtonRoww: {
    flexDirection: 'row', // Make children elements arranged horizontally
    justifyContent: 'space-between', // Add space between buttons
    marginTop: 10
  },
  sizeButton: {
    backgroundColor: '#141921',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  sizeButtonnn: {
    backgroundColor: '#141921',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  selectedButton: {
    borderColor:'#D17842',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonTextt: {
    fontSize: 18,
    color: '#AEAEAE',
    fontWeight: '',
  },
  selectedButtonText: {
    color: '#D17842',
  },
  sizeButtonn: {
    backgroundColor: '#D17842',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  priceContainer: {
    alignItems: 'center',
    
  },
  priceall:{
    flexDirection: 'row',
  }
  ,
  priceText: {
    fontSize: 18,
    color: '#AEAEAE',
    fontWeight: '',
  },
  priceValue: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  pricesign: {
    fontSize: 25,
    color: '#D17842',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 60, 
    marginBottom: 30, // Add marginTop to move the icons to the top
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  nameh: {
   fontSize:25,
   color:'white'
  },
  namet: {
    fontSize:16,
    color:'white'
   },
  name: {
  marginRight:35
   },
  sizeButtonRowww: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  icontab: {
    backgroundColor: 'black',
    height: 60,
    width: 70,
  
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center', // Center text horizontally
    borderRadius:10
  },
  icontext: {
    color: 'white',
    textAlign: 'center', // Center text horizontally
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize:25,
    fontWeight:'bold'

  },
  reviewCount: {
    color: '#FFFFFF',
    marginLeft: 5,
  },
});

export default Reviewpage;
 