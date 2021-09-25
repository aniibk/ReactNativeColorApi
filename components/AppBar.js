import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = () => (
    <Appbar style={styles.bottom}>
        <Appbar.Action
            icon="palette"
            onPress={() => console.log('Pressed home')}
        />
        <Appbar.Content title="COLOUR Lovers" />
    </Appbar>
);

export default AppBar;

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: "black",
    },
});