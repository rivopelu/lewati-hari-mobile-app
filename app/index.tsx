import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Redirect } from 'expo-router';

export default function StartScreen() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Redirect href="/onboarding" />
    </ThemeProvider>
  );
}
