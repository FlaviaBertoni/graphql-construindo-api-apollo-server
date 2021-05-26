const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id),
    },
    Mutation: {
        adicionaUser: (root, user, { dataSources }) => dataSources.usersAPI.adicionaUser(user),
        atualizaUser: (root, user, { dataSources }) => dataSources.usersAPI.atualizaUser(user),
        deletaUser: (root, { id }, { dataSources }) => dataSources.usersAPI.deletaUser(id),
    }
};

module.exports = userResolvers;