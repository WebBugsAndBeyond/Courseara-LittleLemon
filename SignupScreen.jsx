import { useState, useCallback } from 'react';
import { 
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TextInput,
    Pressable,
    Platform,
    Alert,
} from 'react-native';

import { validateEmail } from './utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    messageContainer: {
        // flexBasis: 100,
    },
    messageText: {
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 40,
    },
    inputContainer: {
        flexBasis: 50,
        marginTop: 40,
        marginHorizontal: 20,
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        padding: 10,
    },
    buttonContainer: {

    },
    button: {
        padding: 10,
        borderRadius: 6,
        margin: 20,
    },
    buttonDisabled: {
        backgroundColor: 'rgb(168, 165, 167)'
    },
    buttonEnabled: {
        backgroundColor: 'rgb(14, 98, 1)',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonTextEnabled: {
        color: 'rgb(185, 254, 184)',
    },
    buttonTextDisabed: {
        color: 'rgb(217, 217, 219)',
    },
});


const showAlert = () => {
    if (Platform.OS === 'web') {
        alert('Thanks for subscribing, stay tuned!');
    } else {
        Alert.alert('Little Lemon Newsletter', 'Thanks for subscribing, stay tuned!', [{ text: 'OK' }]);
    }
}

export default function SignupScreen({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const isEmailValid = !!validateEmail(email);
    
    return <ScrollView
        style={styles.container}
        keyboardDismissMode='on-drag'
    >
        <View style={styles.logoContainer}>
            <Image
                style={styles.logoImage}
                source={require('./assets/little-lemon-logo-grey.png')}
                accessible={true}
                accessibilityLabel='Little Lemon logo'
                resizeMode='contain'
            />
        </View>
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
                Subscribe to our newsletter for our latest delicious recipes!    
            </Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                clearButtonMode='always'
                value={email}
                onChangeText={onChangeEmail}
                keyboardType='email-address'
            />
        </View>
        <View style={styles.buttonContainer}>
            <Pressable 
                style={[
                    styles.button,
                    isEmailValid ? styles.buttonEnabled : styles.buttonDisabled
                ]}
                onPress={showAlert}
                disabled={!isEmailValid}
            >
                <Text style={[
                    styles.buttonText,
                    isEmailValid ? styles.buttonTextEnabled : styles.buttonTextDisabed
                ]}>Subscribe</Text>
            </Pressable>
        </View>
    </ScrollView>
}
