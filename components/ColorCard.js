import React from 'react';
import {StyleSheet} from 'react-native';
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
    );

}

export default ColorCard;


const styles = StyleSheet.create({
    

});