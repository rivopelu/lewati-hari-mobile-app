import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextField, View } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '@/constants/Colors';
export function InputText(props: IProps) {
  return (
    <View style={[styles.container, props.style]}>
      {props.label && (
        <Text style={styles.label}>
          {props.label} {props.required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={styles.inputContainer}>
        {props.startIcon && (
          <Icon name={props.startIcon} size={24} color={Colors.system.text} style={styles.icon} />
        )}
        <TextField
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
          enableErrors
          style={styles.textField}
          validate={props.validate}
          validationMessage={props.validationMessage}
          // Props lainnya
        />
        {props.endIcon && (
          <TouchableOpacity onPress={props.onEndIconPress}>
            <Icon name={props.endIcon} size={24} color={Colors.system.text} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

interface IProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  required?: boolean;
  startIcon?: string;
  endIcon?: string;
  onEndIconPress?: () => void;
  validate?: any[];
  validationMessage?: string[];
  style?: any;
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: Colors.system.text,
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.system.inputBackground,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    height: 42,
  },
  textField: {
    flex: 1,
    padding: 0, // Hapus padding default TextField
  },
  icon: {
    marginHorizontal: 10,
  },
});
