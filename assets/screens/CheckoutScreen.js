// screens/CheckoutScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../context/CartContext'; // Import CartContext

const CheckoutScreen = ({ navigation }) => {
  const { cartItems, clearCart } = useContext(CartContext); // Access clearCart

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout successful', '', [
      { 
        text: 'OK', 
        onPress: () => {
          clearCart(); // Clear the cart after pressing OK
          navigation.navigate('Home'); // Navigate to Home
        } 
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {cartItems.map(item => (
        <Text key={item.id}>
          {item.name} - ₱{item.price} x {item.quantity}
        </Text>
      ))}
      <Text style={styles.total}>Total: ₱{totalPrice}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default CheckoutScreen;