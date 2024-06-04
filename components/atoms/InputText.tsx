import { TextField } from 'react-native-ui-lib';

import { Colors } from '@/constants/Colors';

export function InputText() {
  return (
    <TextField
      placeholder="Placeholder"
      onChangeText={(e) => console.log(e)}
      enableErrors
      style={{
        backgroundColor: Colors.system.inputBackground,
        padding: 20,
        borderWidth: 1,
        borderRadius: 5,
        height: 42,
      }}
      validate={['required', 'email', (value: any) => value.length > 6]}
      validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
    />
  );
}
