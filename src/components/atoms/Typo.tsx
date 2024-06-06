import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { STYLES } from '@/src/constants/STYLES';

export default function Typo({ type, children, color }: IProps) {
  function checkColor() {
    switch (color) {
      case 'primary':
        return STYLES.COLORS.PRIMARY.MAIN;
      case 'gray':
        return STYLES.COLORS.SYSTEM.TEXT_GRAY;
      default:
        return STYLES.COLORS.SYSTEM.TEXT;
    }
  }
  const styles = StyleSheet.create({
    h1: { fontWeight: '500', fontSize: 28, color: checkColor() },
    h2: { fontWeight: '500', fontSize: 24, color: checkColor() },
    h3: { fontWeight: '500', fontSize: 20, color: checkColor() },
    h4: { fontWeight: '500', fontSize: 16, color: checkColor() },
    xs: { fontSize: 12, color: checkColor() },
    default: { color: checkColor() },
  });

  switch (type) {
    case 'h1':
      return <Text style={styles.h1}>{children}</Text>;
    case 'h2':
      return <Text style={styles.h2}>{children}</Text>;
    case 'h3':
      return <Text style={styles.h3}>{children}</Text>;
    case 'h4':
      return <Text style={styles.h4}>{children}</Text>;
    case 'xs':
      return <Text style={styles.xs}>{children}</Text>;
    default:
      return <Text style={styles.default}>{children}</Text>;
  }
}

interface IProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'xs';
  children?: string;
  color?: 'gray' | 'primary';
}
