# 1922 Grapql

Projeto de estudos feito durante o curso da Alura "GraphQL: Construindo uma API com Apollo Server" para aprender Graphql.

## Start

### Start do Apollo Server
http://localhost:4000/
```
    $ yarn start
```

### Start da json api
http://localhost:3000/
```
    $ yarn start:json
```

## Apollo Server

Doc: https://www.apollographql.com/docs/apollo-server/

### Server Listen 

O comando abaixo irá iniciar o servidor na porta padrão **4000** do localhost 

```js
server.listen().then(({url}) => {
    console.info(`Servidor roadando no enderço ${url}`)
})
```

Caso queira iniciar em outra porta, por exemplo na 4002, basta informar o atributo port no primeiro parametro
do métodos listen

```js
server.listen({ port: 4002 })
```

### Introspecção

Para checar o ponto de entrada:

```graphql
{
    __schema {
        queryType {
            name
        }
    }
}
```

Para ver os tipos definidos:

```graphql
query {
    __schema {
      types {
        name
        kind
        fields {
            name
        }
      }
    }
}
```

Para ver o kindo de um tipo especifico:

```graphql
{
    __type(name: "User") {
        name
        kind
    }
}
```

**Obs.:** Por padrão em produção não é possivel usar o modo de introspecção (por segurança). Mas caso se trate de um projeto aberto, é possível permitir explicitando na criação do servidor os atributos introspection e playground como true.

```js
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,  
    playground: true,
});
```