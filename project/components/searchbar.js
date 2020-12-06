import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const searchbar=({setsearchterm})=>{
    return(
        <View style={styles.container}>
        <TextInput style={styles.searchInput} placeholder="Search Job Title Here" 
            onChangeText={e=>{setsearchterm(e)}}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop: 15,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center"
    },
    searchInput:{
        width: '100%',
        height: 50,
        paddingLeft: 8,
        fontSize: 16
    }
})

export default searchbar;