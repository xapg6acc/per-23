export interface Phone {
  id: string;
  ram: string;
  name: string;
  color: string;
  screen: string;
  capacity: string;

  year: number;
  price: number;
  image: string;
  itemId: string;
  phoneId: string;
  category: string;
  fullPrice: number;

  quantity: number;
  type: 'regular' | 'detailed';
}

interface DetailedDescription {
  title: string;
  text: string[];
}

export interface PhoneDetailed extends Phone {
  // id: string;
  // ram: string;
  // name: string;
  // color: string;
  // screen: string;
  // capacity: string;

  zoom: string;
  cell: string[];
  camera: string;
  images: string[];
  processor: string;
  resolution: string;
  namespaceId: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  capacityAvailable: string[];
  description: DetailedDescription[];
}

export interface State {
  cart: PhoneDetailed[];
  favorite: PhoneDetailed[];
}

export interface PhoneListParams {
  readonly page: number;
  readonly perPage: 4 | 8 | 16 | 'all';
  readonly sortBy: 'asc' | 'desc' | 'new' | 'old';
}
