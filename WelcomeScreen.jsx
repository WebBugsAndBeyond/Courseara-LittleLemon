import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    logoContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    logoImage: {
        width: 200,
        height: 200,
    },
    welcomeMessageContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeMessageText: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 40,
    },
    buttonContainer: {
        flex: 0.25,
    },
    button: {
        backgroundColor: 'rgb(14, 98, 1)',
        padding: 10,
        borderRadius: 6,
        margin: 20,
    },
    buttonText: {
        color: 'rgb(185, 254, 184)',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default function WelcomeScreen({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logoImage}
                source={require('./assets/little-lemon-logo.png')}
                accessible={true}
                accessibilityLabel='Little Lemon logo'
                resizeMode='contain'
            />
        </View>
        <View style={styles.welcomeMessageContainer}>
            <Text style={styles.welcomeMessageText}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.buttonText}>Newsletter</Text>
            </Pressable>
        </View>
    </View>
}
