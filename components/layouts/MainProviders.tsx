import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';

import ThemeConfig from '@/config/themeConfig';

export default function MainProviders(props: IProps) {
  return (
    <ThemeProvider value={DefaultTheme}>
      <ThemeConfig>{props.children}</ThemeConfig>
    </ThemeProvider>
  );
}

interface IProps {
  children: React.ReactNode;
}
