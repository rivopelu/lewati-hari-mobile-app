import { ThemeProvider, createTheme } from '@rneui/themed';
import React, { ReactNode } from 'react';

import { STYLES } from '@/src/constants/STYLES';

export default function ThemeConfig(props: IProps) {
  const theme = createTheme({
    lightColors: {
      primary: STYLES.COLORS.PRIMARY.MAIN,
    },

    components: {
      Button: {
        radius: 9999,
      },
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

interface IProps {
  children: ReactNode;
}
