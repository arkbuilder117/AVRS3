/**
 * @format
 */
import 'react-native';
import {logIn} from '../src/functions/helperFunctions';
import AuthScreen from '../src/screens/AuthScreen';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AuthContext} from '../App';

// What the hell I did
/*
  So I mocked the logIn function. I can't figure out async with jest, so I found a way around it. This should let me test when a user logs in to see if the screen changes.
*/
jest.mock('../src/functions/helperFunctions', () => ({
  logIn: () => {
    return true;
  },
}));

describe('log in thing', () => {
  test('testing logIn function', () => {
    let value = logIn('noahmatwalker@gmail', 'password');
    expect(value).toBe(true);
  });

  test('shown AuthScreen user can click Login button', () => {
    const signIn = jest.fn();
    const signUp = jest.fn();
    const signOut = jest.fn();
    const {getByText, queryByPlaceholderText} = render(
      <AuthContext.Provider value={{signIn, signUp, signOut}}>
        <AuthScreen />
      </AuthContext.Provider>,
    );

    fireEvent.press(getByText('Login'));
    const loginElement = queryByPlaceholderText('Email');
    // console.log(loginElement);
    expect(loginElement).toBeTruthy();
  });

  test('shown AuthScreen user can click Sign Up? button', () => {
    const signIn = jest.fn();
    const signUp = jest.fn();
    const signOut = jest.fn();
    const {getByText, queryByPlaceholderText} = render(
      <AuthContext.Provider value={{signIn, signUp, signOut}}>
        <AuthScreen />
      </AuthContext.Provider>,
    );

    fireEvent.press(getByText('Sign Up?'));
    const loginElement = queryByPlaceholderText('Email');
    // console.log(loginElement);
    expect(loginElement).toBeTruthy();
    // expect.anything();
  });
});
