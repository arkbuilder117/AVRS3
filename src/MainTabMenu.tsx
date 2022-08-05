import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import SettingsScreen from './SettingsScreen';
import {CartContextType, CartItemType} from './@types';
import Icon from 'react-native-vector-icons/Ionicons';

export const CartContext = React.createContext<CartContextType | null>(null);
// Translate cart and setCart from previos version to using context instead

const Tab = createBottomTabNavigator();

const MainTabMenu = () => {
  const [cart, setCart] = React.useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    // const {cart} = React.useContext(CartContext);

    console.log('\n\nhello ' + item);
    setCart([...cart, item]);
    console.log(cart);
  };

  const emptyCart = () => {
    setCart([]);
    console.log('Empty cart');
    console.log(cart);
  };

  // const cart: Array<string> = [''];

  return (
    <CartContext.Provider value={{emptyCart, addToCart, cart}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            }
            if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            if (route.name === 'settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="menu"
          component={MenuScreen}
          options={{
            headerShown: true,
            title: 'Snacks',
            headerStyle: {backgroundColor: '#EFF1F7'},
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
          }}
        />
        <Tab.Screen
          name="cart"
          component={CartScreen}
          options={{
            headerShown: true,
            title: 'Shopping Cart',
            headerStyle: {backgroundColor: '#EFF1F7'},
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
            tabBarBadge: cart.length > 0 ? cart.length : '',
          }}
        />
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            title: 'Settings',
            headerStyle: {backgroundColor: '#EFF1F7'},
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
          }}
        />
      </Tab.Navigator>
    </CartContext.Provider>
  );
};

export default MainTabMenu;

// const styles = StyleSheet.create({
//   defaultStyle: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
