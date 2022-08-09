/**
 * @format
 */
import 'react-native';
import {logIn} from '../src/helperFunctions';

test('Log in function should return true if user info is correct', async () => {
  let value = await logIn('noahmatwalker@gmail.com', 'password');
  console.log(value);
  expect(value).toBe(true);
});
