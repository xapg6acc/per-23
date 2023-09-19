export interface ProductPrice {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface ProductRange {
  end: string;
  start: string;
}

export interface Product {
  id: number;
  date: string;
  type: string;
  isNew: number;
  photo: string;
  title: string;
  order: number;
  serialNumber: number;
  price: ProductPrice[];
  specification: string;
  guarantee: ProductRange;
}

export interface Order {
  id: number;
  date: string;
  title: string;
  price?: number;
  order: Product[];
  description?: string;
  totalAmount?: number;
}
