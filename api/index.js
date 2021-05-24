const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('graphql-tools');

const userSchema = require('./user/schema/user.graphql');
const userResolvers = require('./user/resolvers/userResolvers');

const typeDefs = mergeTypeDefs([userSchema]);
const resolvers = [userResolvers];

const server = new ApolloServer({ 
    typeDefs, 
    resolvers
});

server.listen().then(({url}) => {
    console.info(`Servidor roadando no enderço ${url}`)
})