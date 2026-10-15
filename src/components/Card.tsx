import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Card extends Component {
    render() {
        return (
            <View style={styles.contenedor}>
                <Text>Card</Text>
            </View>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    contenedor: {
        flex: 1, // ocupa todo el espacio disponible
        justifyContent: 'center', // centra verticalmente
        alignItems: 'center',     // centra horizontalmente
        padding: 20,
        backgroundColor: '#f8f9fa', // gris más claro
        borderRadius: 10,
        margin: 10,
    },
    texto: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
});
