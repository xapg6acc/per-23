import produce from 'immer';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from '@tanstack/react-query';
import { ukUA, enUS, esES, deDE } from '@mui/x-data-grid';
import { useCallback, useContext, useMemo } from 'react';

import { Product, Order } from '../types';
import { Currency, Language } from '../constants';
import { ApplicationOrdersContext } from '../context';
import { ApplicationState } from '../types/application';

export const useApplication = () => {
  const { state, setState } = useContext(ApplicationOrdersContext);
  const { i18n } = useTranslation();
  const { pathname, push, asPath, query } = useRouter();
  const queryClient = useQueryClient();

  //region currency
  const currency = state?.currency as ApplicationState['currency'];
  const updateCurrency = useCallback(
    (value: Currency) => {
      if (state) {
        setState(
          produce(state, draft => {
            draft.currency = value;
          }),
        );
      }
    },
    [state],
  );
  //endregion

  //region language
  const language = state?.language as ApplicationState['language'];
  const locale = useMemo(() => {
    if (state?.language === Language.UA) {
      return ukUA.components.MuiDataGrid.defaultProps.localeText;
    }
    if (state?.language === Language.EN) {
      return enUS.components.MuiDataGrid.defaultProps.localeText;
    }
    if (state?.language === Language.DE) {
      return deDE.components.MuiDataGrid.defaultProps.localeText;
    }
    return esES.components.MuiDataGrid.defaultProps.localeText;
  }, [state?.language]);
  const updateLanguage = useCallback(
    async (value: Language) => {
      if (state) {
        setState(
          produce(state, draft => {
            draft.language = value;
          }),
        );

        await i18n.changeLanguage(value);
        await push({ pathname, query }, asPath, { locale: value });
      }
    },
    [state?.language],
  );
  //endregion currency / language

  //region order
  const order = state?.order as ApplicationState['order'];
  const initialOrder = {
    id: 4,
    order: [],
    title: 'Lorem ipsum dolor sin amet context order',
    date: '2023.9.16',
    totalAmount: 0,
  };
  const contextOrder = useMemo(() => {
    const totalAmount = state?.order.reduce((acc, product) => {
      product.price.forEach(price => {
        if (price.symbol.toLowerCase() === currency) {
          acc += price.value;
        }
      });

      return acc;
    }, 0);

    return {
      id: 4,
      date: '2023.9.16 12:09:33',
      title: 'Lorem ipsum dolor sin amet context order',
      description: 'Order #4 description lorem ipsum dolor sin amet',
      order: state?.order,
      totalAmount,
    };
  }, [state, currency]);
  const isInCurrentOrder = useMemo(
    () => (product: Product) => state?.order.find(item => item.id === product.id),
    [order],
  );
  const updateContextOrder = useCallback(
    (product: Product) => {
      if (state) {
        setState(
          produce(state, draft => {
            const isNotInOrder = state.order?.find(item => item.id === product.id);

            if (!isNotInOrder) {
              draft.order.push(product);
            } else {
              draft.order = draft.order.filter(item => item.id !== product.id);
            }
          }),
        );
      }
    },
    [order],
  );
  const deleteContextOrder = useCallback(() => {
    if (state) {
      setState(
        produce(state, draft => {
          draft.order = [];
        }),
      );
    }
  }, []);
  const deleteCachedOrder = useCallback((order: Order) => {
    queryClient.setQueryData(
      ['orders-application-orders'],
      produce<Order[]>(draft => {
        if (draft) {
          const index = draft.findIndex(cacheOrder => cacheOrder.id === order.id);

          if (index !== -1) {
            draft.splice(index, 1);
          }
        }
      }),
    );
  }, []);
  // todo
  const updateCachedOrder = useCallback((product: Product) => {}, []);
  //endregion

  return {
    currency,
    updateCurrency,

    locale,
    language,
    updateLanguage,

    order,
    contextOrder,
    updateContextOrder,
    deleteContextOrder,
    isInCurrentOrder,
    deleteCachedOrder,
    updateCachedOrder,
  };
};
