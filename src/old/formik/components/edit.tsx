import { ReactNode } from 'react';
import { useField } from 'formik';
import { useTranslation } from 'next-i18next';

import { UiText, UiTextProps } from '@app/old/ui';

export interface TextProps extends UiTextProps {
  readonly children?: ReactNode;
}

export const Edit = ({ name, children, ...props }: TextProps) => {
  const [{ value, onChange }] = useField(name);
  const { t } = useTranslation('form');

  // const label = t(`label.${name}`);
  const placeholder = t(`placeholder.${name}`);

  return (
    <>
      {value ? (
        <UiText
          autoFocus
          fullWidth
          name={name}
          value={value}
          onChange={onChange}
          label={placeholder}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        { children }
      )}
    </>
  );
};
