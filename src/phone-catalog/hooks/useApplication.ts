import produce from 'immer';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useContext, useMemo } from 'react';

import { ApplicationContext } from '../context';
import { Item, Operation, Type } from '../constants';
import { Phone, PhoneDetailed, State } from '../types';

export const useApplication = (type: 'regular' | 'detailed') => {
  const { state, setState } = useContext(ApplicationContext);
  const queryClient = useQueryClient();

  const updateStore = useCallback(
    (data: PhoneDetailed, store: 'cart' | 'favorite') => {
      if (state) {
        setState(
          produce(state, draft => {
            const currentItem = data[type === Type.Regular ? 'phoneId' : 'id'];
            const isNotInCart = state?.[store].find(item => item.id === currentItem);

            if (!isNotInCart) {
              if (type === Type.Regular) {
                // @ts-ignore
                draft?.[store].push({
                  [Item.PhoneId]: data.phoneId,
                  [Item.Name]: data.name,
                  [Item.Color]: data.color,
                  [Item.Screen]: data.screen,
                  [Item.Image]: data.image,
                  [Item.Capacity]: data.capacity,
                  [Item.FullPrice]: data.fullPrice,
                  [Item.Price]: data.price,
                  quantity: 1,
                  type: Type.Regular,
                });
              } else {
                // @ts-ignore
                draft?.[store].push({
                  [Item.Id]: data.id,
                  [Item.Name]: data.name,
                  [Item.Color]: data.color,
                  [Item.Screen]: data.screen,
                  [Item.Images]: data.images[0],
                  [Item.Capacity]: data.capacity,
                  [Item.PriceRegular]: data.priceRegular,
                  [Item.PriceDiscount]: data.priceDiscount,
                  quantity: 1,
                  type: Type.Detailed,
                });
              }
            } else {
              // @ts-ignore
              draft[store] = draft?.[store].filter(item => item.id !== currentItem);
            }
          }),
        );

        // queryClient.setQueryData(['favorite'], state.cart);
      }
    },
    [state, type],
  );

  const updateQuantity = useCallback(
    (device: PhoneDetailed, operation: Operation) => {
      if (state) {
        setState(
          produce(state, draft => {
            if (operation === Operation.Decrease) {
              // @ts-ignore
              draft = draft.cart.find(item => item.id === device.id).quantity--;
            }

            if (operation === Operation.Increase) {
              // @ts-ignore
              draft = draft.cart.find(item => item.id === device.id).quantity++;
            }
          }),
        );
      }
    },
    [state?.cart],
  );

  const deleteFromCart = useCallback(
    (data: string) => {
      if (state) {
        setState(
          produce(state, draft => {
            // @ts-ignore
            draft.cart = draft.cart.filter(item => item !== data);
          }),
        );
      }
      // queryClient.setQueryData(['favorite'], state.cart);
    },
    [state],
  );

  const updateFavorite = useCallback(
    (data: Phone) => {
      if (state) {
        setState(
          produce(state, draft => {
            // if (
            //   !state.favorite.find(
            //     item => data[type === 'regular' ? 'itemId' : 'id'] === item[type === 'regular' ? 'itemId' : 'id'],
            //   )
            // ) {
            //   draft.favorite.push(data);
            // } else {
            //   draft.favorite = draft.favorite.filter(
            //     item => data[type === 'regular' ? 'itemId' : 'id'] === item[type === 'regular' ? 'itemId' : 'id'],
            //   );
            // }
          }),
        );

        queryClient.setQueryData(['favorite'], state.favorite);
      }
    },
    [state],
  );

  const cart = state?.cart as State['cart'];
  const isAddedToCart = useMemo(
    () => (device: PhoneDetailed) =>
      cart.find(item => {
        const currentItem = device[type === Type.Regular ? 'phoneId' : 'id'];

        return currentItem === item.id;
      }),
    [state, type],
  );

  const favorite = state?.favorite as State['favorite'];
  const isFavorite = useMemo(
    () => (device: PhoneDetailed) =>
      favorite.find(item => {
        const currentItem = device[type === Type.Regular ? 'phoneId' : 'id'];

        return currentItem === item.id;
      }),
    [state],
  );

  const cartAmount = useMemo(
    () =>
      state?.cart
        .flatMap(phone => [{ price: phone.price, quantity: phone.quantity }])
        .reduce((acc, item) => {
          if (item.quantity) {
            return acc + item.price * item.quantity;
          }

          return acc + item.price;
        }, 0),
    [state?.cart],
  ) as number;

  return {
    cart,
    favorite,
    cartAmount,
    isFavorite,
    updateStore,
    isAddedToCart,
    updateFavorite,
    deleteFromCart,
    updateQuantity,
  };
};
