import { SettingsList } from './SettingsList';
import { PageLayout } from '../layout/page-layout';

export const SettingsPage = () => {
  return (
    <PageLayout onSearch={() => {}}>
      <SettingsList />
    </PageLayout>
  );
};
