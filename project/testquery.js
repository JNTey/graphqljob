const {GraphQLServer} = require("graphql-yoga");
const fetch = require("node-fetch");

const typetest = 
`query Jobs{
    jobs(input:{
      type:"design"
      slug:"design"
    }){
      title
      company{name, logoUrl}
      cities{name}
      countries{name}
      tags{name}
      locationNames
      
      
    }
    
  }
  `;