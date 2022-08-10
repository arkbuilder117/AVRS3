/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, {AuthContext} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AuthScreen from '../src/screens/AuthScreen';
import CartScreen from '../src/screens/CartScreen';
import {CartContext} from '../src/components/MainTabMenu';
import {CartItemType} from '../src/@types';
import MenuScreen from '../src/screens/MenuScreen';
import SettingsScreen from '../src/screens/SettingsScreen';

describe('Testing if screens will render', () => {
  it('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('AuthScreen renders correctly', () => {
    const tree = renderer.create(<AuthScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const emptyCart = jest.fn();
  const addToCart = jest.fn();
  const cart = [] as Array<CartItemType>;

  it('CartScreen renders correctly', () => {
    const tree = renderer
      .create(
        <CartContext.Provider value={{emptyCart, addToCart, cart}}>
          <CartScreen />
        </CartContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('MenuScreen renders correctly', () => {
    const tree = renderer
      .create(
        <CartContext.Provider value={{emptyCart, addToCart, cart}}>
          <MenuScreen />
        </CartContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  const signIn = jest.fn();
  const signUp = jest.fn();
  const signOut = jest.fn();
  it('SettingsScreen renders correctly', () => {
    const tree = renderer
      .create(
        <AuthContext.Provider value={{signIn, signUp, signOut}}>
          <SettingsScreen />
        </AuthContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
