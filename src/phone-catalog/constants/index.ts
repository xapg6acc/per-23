export enum Local {
  Cart = 'cart',
  Favorite = 'favorite',
}

export const localStorageItem = 'react-phone-catalog';

export enum Type {
  Regular = 'regular',
  Detailed = 'detailed',
}

export enum Operation {
  Decrease = 'decrease',
  Increase = 'increase',
}

export enum Item {
  Name = 'name',
  FullPrice = 'fullPrice',
  PriceRegular = Item.FullPrice,
  Price = 'price',
  PriceDiscount = Item.Price,
  Screen = 'screen',
  Image = 'image',
  Images = Item.Image,
  Id = 'id',
  PhoneId = Item.Id,
  Color = 'color',
  Capacity = 'capacity',
}
