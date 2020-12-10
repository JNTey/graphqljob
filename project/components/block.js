import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from './favouritebutton';
import SyncStorage from 'sync-storage';
// import AsyncStorage from '@react-native-community/async-storage';


const block=({item})=>{
    
    const {title, company, tags, cities, countries, locationNames, id} = item;

    // console.log(AsyncStorage.getItem(id));
    

    logo = company.logoUrl;

    if(logo==null || logo==""){
        logo = "https://miro.medium.com/max/400/1*8yGId6pSq_9b7d5ooIcEOA.png";
    }

    name_array = [];
    locations = "";

    if (locationNames!=null){
        locations = locationNames;
    }
    else if( cities.length!=0){
        for(i=0;i<cities.length;i++){
            if(i==cities.length-1){
                locations += cities[i].name;
            }
            else{
                locations += cities[i].name + ", ";
            }   
        }
    }
    else if(countries.length!=0){
        for(i=0;i<countries.length;i++){
            if(i==countries.length-1){
                locations += countries[i].name;
            }
            else{
                locations += countries[i].name + ", ";
            }   
        }
    }
    else{
        locations = "Unknown Location";
    }

    for(i=0;i<tags.length;i++){
        if(i==tags.length-1){
            tagnames = tags[i].name;
        }
        else{
            tagnames = tags[i].name + ", ";
        }   
        name_array.push(tagnames);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.block}>
                <Image style={styles.image} source={{uri: logo}}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.company}>{company.name}</Text> 
                <Text style={styles.location}>{locations}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.skills}>{name_array}</Text>
                <Button id={id} ></Button>
            </View> 

        </View>
    );

}


const styles=StyleSheet.create({
    container:{
        marginTop: 10,
        width: '95%',
        height: 150,
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
        width: '15%',
        height: 50,
        resizeMode: 'contain',
        marginLeft: 8,
        paddingLeft: 5,
        marginTop: 10,
    },
    title:{
        width: '80%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 5,
        marginRight: 5,
        fontSize: 18,
        justifyContent: "center",
        alignContent:"center",
        marginTop: 10,
        fontWeight: "bold"
    },
    company:{
        width: '50%',
        height: 30,
        marginLeft: 5,
        paddingLeft: 5,
        fontSize: 12,
        justifyContent: "center",
        marginTop: 25,
    },
    skills:{
        width: '80%',
        height: 30,
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 10,
        justifyContent: "center",
        marginTop: 10,
    },
    location:{
        width: '45%',
        height: 30,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 5,
        fontSize: 10,
        justifyContent: "center",
        marginTop: 25,
        textAlign:'right'
    }
})


export default block;
