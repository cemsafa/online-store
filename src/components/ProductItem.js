import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProductItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg'}}/>
      <View style ={styles.rightContainer} >
        <Text style ={styles.title} numberOfLines={3}>Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
        <View style ={styles.ratings}>
          <FontAwesome style ={styles.star} name="star" size={18} color={'#e47911'}/>
          <FontAwesome style ={styles.star} name="star" size={18} color={'#e47911'}/>
          <FontAwesome style ={styles.star} name="star" size={18} color={'#e47911'}/>
          <FontAwesome style ={styles.star} name="star" size={18} color={'#e47911'}/>
          <FontAwesome style ={styles.star} name="star-half-full" size={18} color={'#e47911'}/>
          <FontAwesome style ={styles.star} name="star-o" size={18} color={'#e47911'}/>

          <Text>13,032</Text>
        </View>
        <View style ={styles.prices}>
        <Text style ={styles.price}>from $13.53</Text>
        <Text style ={styles.oldPrice}>$17.53</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  img: { 
    height:150,
    flex: 2,
    resizeMode: 'contain',
    marginLeft: 5,
  }, 
  rightContainer:{ 
    padding: 10,
    flex: 3 
  },
  title:{
    fontSize: 18,
  },
  prices:{
    flexDirection: 'row',
    alignItems: 'center',
    margin:5
  },
  price:{
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5

  },

  oldPrice:{
    marginVertical: 5,
    fontSize:12,
    fontWeight: "normal",
    textDecorationLine: 'line-through'
  },
  ratings:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5 
  },
  star:{
    margin: 2
  }
});

export default ProductItem;
