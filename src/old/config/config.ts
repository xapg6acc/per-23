export const appConfig = {
  isServer: typeof window === 'undefined',
  format: {
    longDate: 'MMMM DD YYYY (dddd)',
    date: 'MMMM DD YYYY',
    slashes: 'DD / MMM / YYYY',
    current: {
      day: 'dddd',
      date: 'D MMM, YYYY',
      time: 'HH:mm',
    }
  }
};
