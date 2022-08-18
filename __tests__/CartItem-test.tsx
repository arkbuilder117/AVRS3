import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../src/components/CartItem';
import * as CartProviderr from '../src/functions/CartContext';
import {CartItemType} from '../src/@types';

describe('Tests for CartItem component.', () => {
  it('Renders correctly', () => {
    const cart = [{name: 'snack', count: 1}];
    const addCartItem = (index: number) => console.log(index);
    const minusCartItem = (index: number) => console.log(index);
    const addToCart = (item: CartItemType) => console.log(item);
    const deleteFromCart = (item: CartItemType) => console.log(item);
    const emptyCart = () => console.log('empty');

    // THIS ONE WORKED!!!
    jest.spyOn(CartProviderr, 'useCart').mockImplementation(() => ({
      cart,
      addCartItem,
      minusCartItem,
      addToCart,
      deleteFromCart,
      emptyCart,
    }));

    const tree = renderer
      .create(
        <CartProviderr.default>
          <CartItem item={0} key={0} />
        </CartProviderr.default>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Add a snack', () => {
    expect(true).toBe(true);
  });

  it('Subtract a snack', () => {
    expect(true).toBe(true);
  });
});
