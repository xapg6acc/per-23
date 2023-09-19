import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

import { useApplication } from '../../hooks';
import { Currency, Language } from '../../constants';

const SettingsCard = dynamic(() => import('./SettingsCard').then(page => page.SettingsCard), { ssr: false });

export const SettingsList = () => {
  const { currency, updateCurrency, language, updateLanguage } = useApplication();

  return (
    <Grid container spacing={5}>
      <Grid item>
        <SettingsCard
          enum={Currency}
          variant="currency"
          defaultValue={currency}
          onChange={e => updateCurrency(e.target.value as Currency)}
        />
      </Grid>
      <Grid item>
        <SettingsCard
          enum={Language}
          variant="language"
          defaultValue={language}
          onChange={e => updateLanguage(e.target.value as Language)}
        />
      </Grid>
    </Grid>
  );
};
