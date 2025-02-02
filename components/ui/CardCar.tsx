import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const CardCar = () => {
    const details = [
        { icon: require('@/assets/images/manual.png'), text: 'Manual' },
        { icon: require('@/assets/images/station.png'), text: 'Petrol' },
        { icon: require('@/assets/images/account.png'), text: 'Seats' }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.infoContainer}>
                    <View style={styles.scoreBox}>
                        <Image source={require('@/assets/images/star.png')} style={styles.icon} />
                        <Text style={styles.detailText}>4.8</Text>
                    </View>
                    <TouchableOpacity style={styles.favoriteBox}>
                        <Image source={require('@/assets/images/heart.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Image source={require('@/assets/images/toyota.png')} style={styles.image} />
            </View>
            <View style={styles.flexBox}>
                <View style={styles.tag}>
                    <Text style={styles.sedon}>Sedon</Text>
                </View>
                <Text style={styles.price}><Text style={styles.sedon}>$25.00</Text>/hr</Text>
            </View>
            <Text style={styles.carName}>Toyota Corolla</Text>
            <View style={styles.separator} />
            <View style={styles.flexBox}>
                {details.map((item, index) => (
                    <View key={index} style={styles.detailBox}>
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.detailText}>{item.text}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

// Styles optimisés
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        borderWidth: 0.4,
        borderColor: '#ced4da',
        elevation: 2,
        shadowOpacity: 0.2,
        shadowColor: '#ced4da'
    },
    imageContainer: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#edf2fb',
        borderRadius: 8,
        padding: 5,
        height: 150,
        position: 'relative'
    },
    infoContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,
        position: 'absolute',
        top: 5,
        left: 0
    },
    scoreBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 4
    },
    favoriteBox: {
        borderRadius: 50,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: '90%',
        resizeMode: 'cover',
        width: '100%'
    },
    flexBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 8
    },
    tag: {
        backgroundColor: '#edf2fb',
        borderRadius: 4,
        padding: 4
    },
    sedon: {
        color: "#00a6fb",
        fontWeight: '700'
    },
    price: {
        fontWeight: 'bold'
    },
    carName: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left'
    },
    separator: {
        borderBottomWidth: 1.5,
        width: '100%',
        borderBottomColor: '#edf2fb',
        marginTop: 10
    },
    detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 2
    },
    detailText: {
        color: '#6c757d',
        fontWeight: '600'
    },
    icon: {
        height: 14,
        width: 14,
        resizeMode: 'contain'
    }
});

export default React.memo(CardCar);
