import React from 'react';
import {View, StyleSheet} from 'react-native';

const screen=({children})=>{
    return(
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        backgroundColor: 'pink',
        flex:1
    }
})

export default screen;