import React, { useState } from 'react';
import { Text, StyleSheet} from 'react-native';
import Searchbar from './components/searchbar';
import Screen from './components/screen';
import Verticallist from './components/verticallist';
import data from './testdata';
import { apolloClient } from './apollo';
import { ApolloProvider, useQuery, gql } from '@apollo/client';

const Q_TEST = gql
`query Jobs{
    jobs(input:{
      type:"backend"
      slug:"backend"
    }){
      title
      company{name, logoUrl}
      cities{name}
      countries{name}
      tags{name}
      locationNames
    }
  }
  `

const GQLApp = () => {

  const [searchterm, setsearchterm] = useState("");
  const { testdata, loading, error } = useQuery(Q_TEST);

  const filter 
  = data.filter(item=>{
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
      <GQLApp>
      </GQLApp>
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


// import React from 'react';
// import { Text, View, SafeAreaView, ActivityIndicator, Image, StyleSheet } from 'react-native';
// import { ApolloProvider, useQuery, gql } from '@apollo/client';

// import { apolloClient } from './apollo';

// const GET_TWEET = gql`
//   query {
//     twitter {
//       tweet(id: "1261034643710775299") {
//         text
//         user {
//           name
//           screen_name
//           profile_image_url
//         }
//       }
//     }
//   }
// `

// function RootComponent() {
//   const { data, loading, error } = useQuery(GET_TWEET);

//   if (error) { console.error('error', error) };
//   if (loading) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator />
//       </SafeAreaView>
//     );
//   };
//   const { tweet } = data.twitter;
//   const { user } = tweet;
//   return (
//     <View style={styles.container}>
//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: user.profile_image_url }}
//           style={styles.image}
//         />
//         <View style={styles.details}>
//           <Text style={styles.name}>
//             {user.name}
//           </Text>
//           <Text style={styles.username}>
//             @{user.screen_name}
//           </Text>
//         </View>
//       </View>
//       <View style={styles.tweetContainer}>
//         <Text style={styles.tweet}>
//           {tweet.text}
//         </Text>
//       </View>
//     </View>
//   )
// }



// export default function App() {
//   return (
//     <ApolloProvider client={apolloClient}>
//       <RootComponent />
//     </ApolloProvider>
//   );
// }
