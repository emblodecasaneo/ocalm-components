import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

interface CardChooseProps {
  price: number;
  productName: string;
  imageUrl: string;
}

const CardChoose: React.FC<CardChooseProps> = ({ price, productName, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.price}>
            <Text style={styles.symbole}>$</Text>{price}
          </Text>
        </View>
        <TouchableOpacity style={styles.favoriteBox}>
          <Image source={require('@/assets/images/heart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.carName}>{productName}ff</Text>
    </View>
  );
};

// Styles optimisés
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    borderWidth: 0.4,
    height: 140,
    width: 140,
    justifyContent:'space-between',
    borderColor: '#ced4da',
    elevation: 2,
    shadowOpacity: 0.2,
    shadowColor: '#ced4da'
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
    height: '50%',
    marginTop:30,
    resizeMode: 'cover',
    borderRadius:8,
    width: '85%'
  },
  price: {
    fontWeight: 'bold'
  },
  carName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  },
  icon: {
    height: 14,
    width: 14,
    resizeMode: 'contain'
  },
  symbole: {
    color: '#00a6fb'
  }
});

export default React.memo(CardChoose);
