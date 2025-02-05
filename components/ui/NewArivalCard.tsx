import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const NewArivalCard = () => {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageBox}>
                <View style={styles.detail}>
                    <Text style={styles.title}>New Collection</Text>
                    <Text style={styles.f23}>Discount 50% for the frist transaction</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Shop now</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('@/assets/images/caapp1.jpg')} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        backgroundColor: '#fcfdfd',
        borderRadius: 8,
        padding: 10,
        height: 110,
        boxShadow: '1 2 4 #909394'
    },

    imageBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },

    image: {
        height: '100%',
        resizeMode: 'cover',
        width: '45%',
        borderRadius:10     
    },

    title: {
        color: '#2f3e46',
        fontSize: 20,
        fontWeight: 'bold',
    },

    f23: {
        color: 'black',
        fontSize:15,
        marginTop:3,
        letterSpacing:1.2
    },

    btn:{
        height:30,
        backgroundColor:'#335c67',
        width:90,
        borderRadius:8,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },

    btnText:{
        fontSize:16,
        fontWeight:'700',
        color:'white',
        letterSpacing:1.5
    },

    detail: {
        width: '45%'
    }
});

export default React.memo(NewArivalCard);
