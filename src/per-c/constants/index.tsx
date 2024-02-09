import AppleIcon from '@mui/icons-material/Apple';
import AnchorIcon from '@mui/icons-material/Anchor';
import BiotechIcon from '@mui/icons-material/Biotech';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

import i18n from '@app/home-page/images/i18n.jpeg';
import uaFlagImage from '@app/home-page/images/ua-flag.png';
import reactTsImage from '@app/home-page/images/react-ts.png';
import dzenCodeImage from '@app/home-page/images/dzen-code.png';
import phoneCatalogImage from '@app/home-page/images/phone-catalog-banner.png';
import { ElementType } from 'react';

export const itemsMap: Record<number, { image: string; color: string; icon: ElementType }> = {
  1: { icon: AppleIcon, color: 'red', image: i18n.src },
  2: { icon: AnchorIcon, color: 'green', image: uaFlagImage.src },
  3: { icon: BiotechIcon, color: 'blue', image: dzenCodeImage.src },
  4: { icon: AddAlarmIcon, color: 'black', image: phoneCatalogImage.src },
  5: { icon: AccessibilityIcon, color: 'yellow', image: reactTsImage.src },
  6: { icon: AccessibleForwardIcon, color: 'pink', image: uaFlagImage.src },
};
