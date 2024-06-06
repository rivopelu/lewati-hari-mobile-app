import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

import { STYLES } from '@/constants/STYLES';

export function InputText(props: IProps) {
  return (
    <View style={[styles.container, props.style]}>
      {props.label && (
        <Text style={styles.label}>
          {props.label} {props.required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: STYLES.COLORS.SYSTEM.TEXT,
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: STYLES.COLORS.SYSTEM.INPUT_BACKGROUND,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: STYLES.COLORS.SYSTEM.TEXT,
  },
  icon: {
    marginHorizontal: 10,
  },
});

interface IProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  required?: boolean;
  secureTextEntry?: boolean;
  startIcon?: string;
  endIcon?: string;
  onEndIconPress?: () => void;
  validate?: any[];
  validationMessage?: string[];
  keyboardType?: KeyboardTypeOptions;
  style?: any;
}
