import { Product } from '../types';
import { Currency, Language } from '../constants';

export interface ApplicationState {
  socket: number;
  order: Product[];
  language: Language;
  currency: Currency;
}
