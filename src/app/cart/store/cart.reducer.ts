import { createEntityAdapter, EntityState } from '@ngrx/entity';
import produce from 'immer';

import { CartActions, CartActionTypes } from './cart.action';
import { CartItem } from './../cart.model';

const cartAdapter = createEntityAdapter<CartItem>({
  selectId: (cart: CartItem) => cart.productId
});

export interface State extends EntityState<CartItem> {}

const initialState = cartAdapter.getInitialState();

export const reducer = produce<State, CartActions>((draft, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ONE: {
      const ids = draft.ids as Array<number | string>;
      if (ids.includes(action.payload.productId)) {
        draft.entities[action.payload.productId].quantity += 1;
        return;
      } else {
        return cartAdapter.addOne(action.payload, draft);
      }
    }
    case CartActionTypes.REMOVE_ONE: {
      const ids = draft.ids as Array<number | string>;
      if (ids.includes(action.payload)) {
        if (draft.entities[action.payload].quantity === 1) {
          return cartAdapter.removeOne(action.payload, draft);
        }
        draft.entities[action.payload].quantity -= 1;
        return;
      }
    }
  }
}, initialState);

const { selectEntities, selectAll } = cartAdapter.getSelectors();

export const selectCartEntities = selectEntities;
export const selectAllCartItems = selectAll;