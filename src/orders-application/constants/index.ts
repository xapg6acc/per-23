export const statusMap: Record<string | number, { color: string; title: string }> = {
  0: { color: 'grey.300', title: 'old' },
  1: { color: 'green.300', title: 'new' },
  new: { color: 'green.300', title: 'new' },
  old: { color: 'grey.300', title: 'old' },
};

export enum ProductTypeEnum {
  monitor = 'monitor',
  laptop = 'laptop',
}

export enum ProductEnum {
  Id = 'id',
  SerialNumber = 'serialNumber',
  IsNew = 'isNew',
  Photo = 'photo',
  Title = 'title',
  Type = 'type',
  Specification = 'specification',
  GuaranteeStart = 'guaranteeStart',
  GuaranteeEnd = 'guaranteeEnd',
  Price = 'price',
  Order = 'order',
  Date = 'date',
  AddToOrder = 'addToOrder',
}

export enum Currency {
  UAH = 'uah',
  USD = 'usd',
}

export enum Language {
  UA = 'uk',
  EN = 'en',
  ES = 'es',
  DE = 'de',
}

export const localStorageItem = 'orders-application-storage';
