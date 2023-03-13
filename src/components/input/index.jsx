import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import Label from "../label";

const Input = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor = THEME.colors.black,
    KeyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
      <View style = {styles.container}>
      <Label { ...props }>
         <TextInput 
            {...props}
            aditable={editable}
            value={value}
            style={{ ...styles.input, ...style }}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={KeyboardType}
         />
      </Label>
         {hasError && touched && (
            <View style={styles.message}>
              <Text style={styles.helpperText}>{error}</Text>
            </View>
         )}
      </View>
    );
};

export default Input;