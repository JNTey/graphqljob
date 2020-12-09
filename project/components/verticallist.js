import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Block from './block';


const verticallist=({data})=>{
    return(
        <View style={styles.container}>
            <FlatList data={data} keyExtractor={item=>item.id} 
                vertical showsVerticalScrollIndicator={false} 
                renderItem={({item})=><Block item={item}/>}>
            </FlatList>
        </View>
    );
}


const styles=StyleSheet.create({
    container:{
        marginTop: 10,
        width: '100%',
        flex:1,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: 'black',
        marginBottom: 10,
    }
})


export default verticallist;
