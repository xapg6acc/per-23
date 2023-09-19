import { ChangeEvent } from 'react';
import { useTranslation } from 'next-i18next';
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Paper } from '@mui/material';

export interface SettingGroupProps {
  readonly defaultValue: string;
  readonly enum: Record<any, any>;
  readonly variant: 'currency' | 'language';
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SettingsCard = ({ variant, onChange, defaultValue, enum: data }: SettingGroupProps) => {
  const { t } = useTranslation('orders');

  return (
    <Paper sx={{ p: 2 }}>
      <FormControl>
        <FormLabel id={`${variant}-radio-buttons-group-label`}>{t(`${variant}.title`)}</FormLabel>
        <RadioGroup
          onChange={onChange}
          value={defaultValue || null}
          name={`${variant}-radio-buttons-group`}
          aria-labelledby={`${variant}-radio-buttons-group-label`}
        >
          {Object.values(data).map(value => (
            <FormControlLabel key={value} value={value} control={<Radio />} label={t(`${variant}.${value}`)} />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};
