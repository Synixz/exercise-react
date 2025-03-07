// screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text>{item.name} - ₱{item.price} x {item.quantity}</Text>
              <View style={styles.quantityButtons}>
                <Button title="-" onPress={() => handleQuantityChange(item.id, item.quantity - 1)} />
                <Button title="+" onPress={() => handleQuantityChange(item.id, item.quantity + 1)} />
              </View>
            </View>
          </View>
        )}
      />
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  quantityButtons: {
    flexDirection: 'row',
  },
});

export default CartScreen;