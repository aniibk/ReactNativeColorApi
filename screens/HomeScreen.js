
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';



export default function HomeScreen({navigation}) {

    return (
        <View style={{
            width: "100%", height: "100%", backgroundColor: 'lightyellow'
        }}>
            <Image source={require('./icon.jpeg')} style={styles.img}/>
            <Text style={styles.welcome}>WELCOME</Text>
            <Text style={styles.about}>COLOURlovers is a creative community enabling users to discuss trends, explore articles and share user-generated colors, palettes, patterns.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 35,
        fontWeight: "900",

    },
    about: {
        textAlign: "justify",
        marginHorizontal: 20,
    },
    img: {
        borderRadius: 100,
        height: 200,
        width: 200,
        marginHorizontal: 95,
        marginTop: 100
    
    }
   

});