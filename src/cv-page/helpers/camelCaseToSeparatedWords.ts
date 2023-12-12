export const camelCaseToSeparatedWords = (camelCase: string) => {
  return camelCase.split(/(?=[A-Z])/).join(' ');
};
