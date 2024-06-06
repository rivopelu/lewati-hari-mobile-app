/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { STYLES } from '@/constants/STYLES';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof STYLES.light & keyof typeof STYLES.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return STYLES[theme][colorName];
  }
}
