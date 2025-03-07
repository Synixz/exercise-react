// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from '../context/CartContext';

// Sample products with images
const products = [
  { id: '1', name: 'Industrial Electric Fan', price: 6000, image: require('../Industrial Electric Fan.jpg') },
  { id: '2', name: 'Logitech PRO X Superlight 2', price: 9000, image: require('../Logitech PRO X Superlight 2.jpg') },
  { id: '3', name: 'Tofu60 Keyboard', price: 12000, image: require('../Tofu60 Keyboard.jpg') },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text>{item.name} - ₱{item.price}</Text>
              <Button title="Add to Cart" onPress={() => addToCart(item)} />
            </View>
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;