import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../constants/theme";

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
         <TextInput 
            {...props}
            aditable={editable}
            value={value}
            style={{ ...style.input, ...style }}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={KeyboardType}
         />
         {hasError && touched && (
            <View style={styles.message}>
              <Text style={styles.helpperText}>{error}</Text>
            </View>
         )}
      </View>
    );
};