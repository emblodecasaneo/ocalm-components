import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Register: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureText, setSecureText] = useState<boolean>(true);

    const details: { icon: any }[] = [
        { icon: require('@/assets/images/facebook.png') },
        { icon: require('@/assets/images/google.png') },
        { icon: require('@/assets/images/apple.png') }
    ];

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleRegister = (): void => {
        if (!name || !email || !password) {
            Alert.alert("Erreur", "Tous les champs sont obligatoires");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("Erreur", "Adresse email invalide");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Erreur", "Le mot de passe doit contenir au moins 6 caractères");
            return;
        }
        Alert.alert("Succès", "Inscription réussie !");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>            
            <View style={styles.inputContainer}>
                <Image source={require('@/assets/images/user.png')} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nom & Prénom"
                    placeholderTextColor={'gray'}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image source={require('@/assets/images/email.png')} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'gray'}
                    placeholder="Adresse email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image source={require('@/assets/images/lock.png')} style={styles.inputIcon} />
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry={secureText}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    <Image source={require('@/assets/images/eye.png')} style={styles.inputIcon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>

            <View style={styles.flexBox}>
                <View style={styles.separator} />
                <Text style={styles.textOr}>ou continuer avec</Text>
                <View style={styles.separator} />
            </View>
            <View style={styles.flexBoxMedia}>
                {details.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.iconMedia}>
                        <Image source={item.icon} style={styles.icon} />
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.sousTitle}>Vous avez déja un compte ? <Text style={styles.connect}>Connectez-vous</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        borderWidth:.6,
        borderColor:'#adb5bd',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        //color: '#00a6fb',
        marginBottom: 30,
    },
    sousTitle: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
        color: 'gray',
    },

    connect:{
        color:'#00a6fb',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ced4da',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        height: 42,
        color: '#00a6fb',
    },
    button: {
        backgroundColor: '#00a6fb',
        marginTop: 10,
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    flexBox: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    separator: {
        borderBottomWidth: 1.8,
        width: '30%',
        borderBottomColor: '#edf2fb',
    },
    textOr: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
    },
    flexBoxMedia: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginTop: 30,
    },
    iconMedia: {
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor:'white',
        boxShadow:'1 2 3 #adb5bd',
        alignItems: 'center',
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
});

export default Register;
