import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Card, Title, Paragraph } from 'react-native-paper';

const ColorCard = ({ item }) => {
    
    return (
        
        <Card>
            <Card.Content>
                <Title> {item.title} </Title>
                <Paragraph> {item.hex} </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.imageUrl }} />

        </Card>
        
        // <TouchableOpacity>
        //     <View style={styles.textContainer}>
        //         <Text>{item.title}</Text>

        //         </View>

        // </TouchableOpacity>
    );

}

export default ColorCard;


const styles = StyleSheet.create({
    

});