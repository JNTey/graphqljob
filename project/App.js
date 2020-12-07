import React, { useState } from 'react';
import { Text, StyleSheet} from 'react-native';
import Searchbar from './components/searchbar';
import Screen from './components/screen';
import Verticallist from './components/verticallist';
import { apolloClient } from './apollo';
import { ApolloProvider, useQuery, gql } from '@apollo/client';

const JOBS_QUERY = gql
`query{
  jobs(input:{
    type:""
    slug:""
  }){
    id
    title
    company{name, logoUrl}
    cities{name}
    countries{name}
    tags{name}
    locationNames
  }
}
`;


const GQLApp = () => {

  const [searchterm, setsearchterm] = useState("");

  const { loading, error, data } = useQuery(JOBS_QUERY);

  if (loading) return <Text>LOADING</Text>;
  if (error) return `Error! ${error.message}`;

  const filter 
  = data.jobs.filter(item=>{
    if (searchterm ==""){
      return item
    }else if(item.title.includes(searchterm)){
      return item
    }
  }); 

  return (
    <Screen>
      <Searchbar setsearchterm={setsearchterm}/>
      <Text style={styles.header}>Jobs List</Text>
      <Verticallist data={filter}/>
    </Screen>
  )
  
}

export default function app(){
  return(
    <ApolloProvider client={apolloClient}>
      <GQLApp/>
    </ApolloProvider>
  )
}

const styles=StyleSheet.create({
  header:{
    marginTop: 10,
    width: '100%',
    height: 30,
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 8,
    justifyContent: "center"
  },
});

