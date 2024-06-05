import { Colors } from '@/constants/Colors';
import { ThemeProvider, createTheme } from '@rneui/themed';
import React, { ReactNode } from 'react';

export default function ThemeConfig(props: IProps) {
  const theme = createTheme({
    lightColors: {
      primary: Colors.primary.main,
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
