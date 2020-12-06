import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const block=({item})=>{
    
    const {title} = item; 
    
    return(
        <View style={styles.container}>
            <View style={styles.block}>
                <Image style={styles.image} source={require('../android/app/src/main/assets/ruby.png')}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.company}>Company</Text>              
            </View>
            <View style={styles.block}>
                <Text style={styles.skills}>Skills</Text>
                <Text style={styles.location}>Location</Text>
            </View>       
        </View>
    );

}


const styles=StyleSheet.create({
    container:{
        marginTop: 10,
        width: '95%',
        height: 125,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center",
        overflow: "hidden",
        marginLeft: 8,
        marginBottom: 10,
    },
    block:{
        flex: 1,
        flexDirection: "row",
    },
    image:{
        width: '25%',
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: 10,
    },
    title:{
        width: '45%',
        height: 50,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 20,
        fontWeight: "bold"
    },
    company:{
        width: '25%',
        height: 50,
        paddingLeft: 8,
        fontSize: 12,
        justifyContent: "center",
        marginTop: 25,
    },
    skills:{
        width: '70%',
        height: 30,
        paddingLeft: 8,
        fontSize: 10,
        justifyContent: "center",
        marginTop: 15,
        marginLeft: 15
    },
    location:{
        width: '25%',
        height: 30,
        paddingLeft: 8,
        fontSize: 10,
        justifyContent: "center",
        marginTop: 15,
    }
})

export default block;