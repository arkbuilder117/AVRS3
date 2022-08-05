export type RootStackParamList = {
  splash: undefined;
  auth: undefined;
  tabMenu: undefined;
};

export type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
};

export type CartItemType = {
  name: string;
  count: number;
};

export type CartContextType = {
  emptyCart: () => void;
  addToCart: (item: CartItemType) => void;
  cart: Array<CartItemType>;
};

export type SnackType = {
  Name: string;
  Reserved: number;
  Total: number;
  image: string;
};
