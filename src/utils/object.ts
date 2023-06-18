export const toNumber = <T extends Record<any, any>>(object: T, except: string[] = ['phone']): T => {
  const result: Record<any, any> = Array.isArray(object) ? [] : {};

  Object.entries(object).forEach(([key, value]) => {
    if (except.includes(key)) {
      result[key] = value;
    } else if (value === null) {
      result[key] = undefined;
    } else if (typeof value === 'object') {
      result[key] = toNumber(value);
    } else {
      result[key] = isNaN(Number(value)) ? value : Number(value);
    }
  });

  return result;
};
