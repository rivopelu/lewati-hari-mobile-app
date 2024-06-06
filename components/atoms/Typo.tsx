import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Typo({ type, children }: IProps) {
  const styles = StyleSheet.create({
    h1: { fontWeight: '500', fontSize: 28 },
    h2: { fontWeight: '500', fontSize: 24 },
    h3: { fontWeight: '500', fontSize: 20 },
    h4: { fontWeight: '500', fontSize: 16 },
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
    default:
      return <Text>{children}</Text>;
  }
}

interface IProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode; // Updated to ReactNode
}
