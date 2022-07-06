import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons'; 



const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.containerView}> 

      <View style={styles.logoView}>
        <TouchableOpacity>
        <Image source={require('../../assets/store_logo.png')} style={styles.logoImage}/> 
        </TouchableOpacity>
      
      <Feather name="search" size={24} color="black" style={styles.search}/>
      </View>

      <ScrollView style={styles.scrollView}>

      <View style={styles.profileView}>       
       <Text style={styles.helloText}>Hello, Customer</Text>
       <TouchableOpacity>
       <Image source={require('../../assets/profile.jpg')} style={styles.profileImage}/> 
       </TouchableOpacity>
       
      </View>

        <View style={styles.listView}>
        <TouchableOpacity style={styles.list}>
          <Text style={styles.listText}>Wish List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.listText}>Your Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.listText}>Buy Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.listText}>Your Account</Text>
        </TouchableOpacity>

        </View>
        
        <Text style={styles.viewingText}>People are viewing right now</Text>
        
        <ScrollView style={styles.productView} horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/bag.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>
          
          <View style={styles.prodFrame}>
            <TouchableOpacity>
            <Image source={require('../../assets/earphone.jpg')} style={styles.productImage}/>
            </TouchableOpacity>
         
          </View>
          
          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/fan.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>

          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/ball.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>
          
        </ScrollView>


        <Text style={styles.viewingText}>Order again</Text>
        
        <ScrollView style={styles.productView} horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/makeup.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>
          
          <View style={styles.prodFrame}>
            <TouchableOpacity>
            <Image source={require('../../assets/mascara.jpg')} style={styles.productImage}/>
            </TouchableOpacity>
         
          </View>
          
          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/nutella.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>

          <View style={styles.prodFrame}>
          <TouchableOpacity>
          <Image source={require('../../assets/coffee.jpg')} style={styles.productImage}/>
          </TouchableOpacity>
          
          </View>
          
        </ScrollView>


      </ScrollView>



     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  scrollView: {
    borderTopWidth: 1, 
    borderTopColor: '#d3d3d3', 
    marginTop: -20, 
    //backgroundColor: '#F0EBE3',   
    
    
   
  },
  logoView: {
    marginTop: -15,
    flexDirection: 'row',    
    // borderBottomColor: '#d3d3d3',
    // borderBottomWidth: 1,
  },
  logoImage: {
    height: 120,
    width: 120,
    borderColor: 'black',
    marginLeft: 10,

  },
  search: {    
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderStyle: "solid",
    borderColor: 'black',
    marginTop: 60,
    marginLeft: 240,

  },
  profileView: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'flex-start',
    height: 70,
    flexDirection: 'row',
    marginTop: 0,
    //backgroundColor: '#F0EBE3',
    //borderBottomColor: '#DDDDDD',
    // borderColor: 'black',
    //borderStyle: 'none',
    //borderBottomWidth: 1,
 
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,   
    marginLeft: 90,
    marginTop: 10,
   
  },
  
  helloText: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginLeft: 30,
    fontSize: 30,
    marginTop: 25,
  
  },
  listView:  {
    //marginTop: 5,
  },
  
  list: {
    height: 70,
    marginTop: 20,
    backgroundColor: '#f9a620',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    

  },
  listText: {
    fontSize: 25,
    marginTop: 20,
   
  },
  viewingText: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
  },
  productView: {
    marginTop: 10,
    flexDirection: 'row',
    
 
  },
  prodFrame: {
    height: 150,
    width:150,
    margin: 5,
    marginLeft: 5,
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'gray',
    

  },
  productImage: {
    height: 120,
    width: 120,  
    marginTop: 20, 
    
    
    

  },
});

export default ProfileScreen;
