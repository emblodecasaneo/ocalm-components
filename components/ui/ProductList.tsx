import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardChoose from './CardChoose';  // Import du composant CardChoose

interface Product {
  price: number;
  productName: string;
  imageUrl: string;
}

const productData: Record<string, Product[]> = {
  Nike: [
    { price: 180, productName: 'Nike Jordan Aerospace 720', imageUrl: 'https://images.unsplash.com/photo-1626466368754-f1c67d680345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D' },
    { price: 220, productName: 'Nike Air Max 270', imageUrl: 'https://images.unsplash.com/photo-1588584470505-2e1a329ce68e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D' },
    { price: 150, productName: 'Nike Air Force 1', imageUrl: 'https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8' },
    { price: 150, productName: 'Nike Air Force 10', imageUrl: 'https://images.unsplash.com/photo-1593720924810-573e924d20dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8' },

  ],
  Adidas: [
    { price: 200, productName: 'Adidas Ultraboost 22', imageUrl: 'https://example.com/adidas1.png' },
    { price: 180, productName: 'Adidas Yeezy Boost 350', imageUrl: 'https://example.com/adidas2.png' },
    { price: 160, productName: 'Adidas NMD R1', imageUrl: 'https://example.com/adidas3.png' },
  ],
  Reebok: [
    { price: 170, productName: 'Reebok Classic Leather', imageUrl: 'https://example.com/reebok1.png' },
    { price: 180, productName: 'Reebok Nano X1', imageUrl: 'https://example.com/reebok2.png' },
    { price: 140, productName: 'Reebok Zig Kinetica', imageUrl: 'https://example.com/reebok3.png' },
  ]
};

const ProductList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Nike' | 'Adidas' | 'Reebok'>('Nike');

  const renderTabContent = () => {
    const selectedProducts: Product[] = productData[selectedTab];

    return (
      <View style={styles.tabContent}>
        {selectedProducts.map((product, index) => (
          <CardChoose 
            key={index}
            price={product.price}
            productName={product.productName}
            imageUrl={product.imageUrl}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <Text style={styles.category}>Catégories</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Nike' && styles.selectedTab]}
          onPress={() => setSelectedTab('Nike')}
        >
          <Text style={styles.tabText}>Nike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Adidas' && styles.selectedTab]}
          onPress={() => setSelectedTab('Adidas')}
        >
          <Text style={styles.tabText}>Adidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Reebok' && styles.selectedTab]}
          onPress={() => setSelectedTab('Reebok')}
        >
          <Text style={styles.tabText}>Reebok</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth:.5,
    borderColor:'#ccc',
    padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    borderBottomWidth: .5,
    borderBottomColor: '#ccc',
  },
  selectedTab: {
    borderTopColor: '#00a6fb',
    borderTopWidth: 2,
    backgroundColor: '#e9ecef',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
  },
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-evenly',
  },

  category: {
    fontWeight: '800',
    fontSize: 23,
    marginBottom: 30,
  }
});

export default React.memo(ProductList);
