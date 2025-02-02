import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const CardCar1 = () => {
    return (
        <View style={styles.imageContainer}>
            <View>
                <View style={styles.detail}>
                    <Text style={styles.title}>Tesla Model X</Text>
                    <Text style={styles.f23}>F23 4AP</Text>
                    <Text style={styles.title}>Baterry: <Text style={styles.percent}>77%</Text></Text>
                </View>
            </View>
            <Image source={require('@/assets/images/tesla1.png')} style={styles.image} />
        </View>
    );
};

// Styles optimisés
const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#343a40',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 85,
    },
    image: {
        height: '80%',
        resizeMode: 'cover',
        width: '50%'
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },

    f23: {
        color: 'white'
    },
    percent: {
        color: '#00a6fb'
    },

    detail: {
        gap: 5
    }
});

export default React.memo(CardCar1);
