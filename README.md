# 1922 Graphql

Projeto de estudos feito durante o curso da Alura "GraphQL: Construindo uma API com Apollo Server" para aprender Graphql.

## Start

### Start do Apollo Server
http://localhost:4000/
```bash
yarn start
```

### Start da json api
http://localhost:3000/
```bash
yarn start:json
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

Caso queira iniciar em outra porta, por exemplo na **4002**, basta informar o atributo *port* no primeiro parametro
do métodos listen

```js
server.listen({ port: 4002 })
```

### Introspecção

Uma forma de explorar uma api graphql é olhando para as *DOCS* no playground e/ou fazer consultas ao esquema.

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

Para ver o *kind* de um tipo especifico:

```graphql
{
    __type(name: "User") {
        name
        kind
    }
}
```

**Obs.:** Por padrão em produção não é possivel usar o modo de introspecção (por segurança). Mas caso se trate de um projeto aberto é possível permitir explicitando na criação do servidor os atributos *introspection* e *playground* como **true**.

```js
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,  
    playground: true,
});
```

### Data sources

É possível utilizar bibliotecas para o apollo server a fim de integrar com diversas base de dados diferentes, como api rest, sql databases, mongo, entre outros:

https://www.apollographql.com/docs/apollo-server/data/data-sources/#restdatasource-reference

Mais infos:

https://www.apollographql.com/blog/backend/data-sources/a-deep-dive-on-apollo-data-sources/

Outra opções: 

- [Prisma](https://www.prisma.io/) - SQL (Postgres, MySQL ou SQLite)
- [Hasura](https://hasura.io/) - Postgres, GraphQL e APIs REST
- [AWS AppSync](https://aws.amazon.com/pt/appsync/) - DynamoDB, Elasticsearch e Aurora
- [Stitch](https://docs.mongodb.com/realm/graphql/) - MongoDB

### Resolver params

- **root/parent**: nó pai da query
- **args**: parametros recebidos na query
- **context**: acesso ao objeto de contexto do graphql
- **info**: árvore da query/mutation da requisição

Mais sobre o info: https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a