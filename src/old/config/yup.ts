import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: { key: 'required' },
  },
  string: {
    email: { key: 'email' },
    max: ({ max }: { max: number }) => ({ key: 'max', values: { max } }),
    min: ({ min }: { min: number }) => ({ key: 'min', values: { min } }),
  },
  number: {
    max: ({ max }: { max: number }) => ({ key: 'maxNumber', values: { max } }),
    min: ({ min }: { min: number }) => ({ key: 'minNumber', values: { min } }),
  },
  array: {
    min: ({ min }: { min: number }) => ({ key: 'arrayMin', values: { min } }),
  },
});

export default yup;
