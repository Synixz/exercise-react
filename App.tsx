// app.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './assets/context/CartContext';
import HomeScreen from './assets/screens/HomeScreen';
import CartScreen from './assets/screens/CartScreen';
import CheckoutScreen from './assets/screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;