import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import CartItem from './CartItem';

import {db} from '../firebase';
import {doc, setDoc} from 'firebase/firestore';
import {CartContext} from './MainTabMenu';
import {CartContextType} from './@types';

export default function ShoppingCartPage() {
  const [orderNum, setOrderNum] = useState('');
  const {cart, emptyCart} = React.useContext(CartContext) as CartContextType;

  const placeOrder = () => {
    let order = Math.floor(100000 + Math.random() * 900000);
    let snacks = [];
    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < cart[i].count; j++) {
        snacks.push(cart[i].name);
      }
    }
    console.log(cart);
    console.log(snacks);

    setDoc(doc(db, 'orders', String(order)), {Snacks: snacks});
    emptyCart();
    setOrderNum(String(order));
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {/* {cart.map((item, index) => (
          <>{item.count > 0 && <CartItem key={index} item={item} />}</>
        ))} */}
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </View>
      <Text style={styles.orderText}>Order Number:</Text>
      <Text style={styles.orderText}>{orderNum}</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({pressed}) => [styles.button, pressed ? {opacity: 0.8} : {}]}
          onPress={() => placeOrder()}>
          <Text style={styles.buttonText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  itemsContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  orderText: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#05111B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    color: '#DBDDDF',
  },
});
