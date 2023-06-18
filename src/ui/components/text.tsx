import { useField } from 'formik';
import { useTranslation } from 'next-i18next';
import { TextField, TextFieldProps } from '@mui/material';

export type UiTextProps = Omit<TextFieldProps, 'name'> & { readonly name: string };

export const UiText = ({ name, ...props }: UiTextProps) => {
  const [{ value, onChange }] = useField(name);
  const { t } = useTranslation('form');

  // const label = t(`label.${name}`);
  const placeholder = t(`placeholder.${name}`);

  return <TextField name={name} value={value} onChange={onChange} label={placeholder} placeholder={placeholder} {...props} />;
};
