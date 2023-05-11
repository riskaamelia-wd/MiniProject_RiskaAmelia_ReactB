import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://complete-ram-76.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : 'EsQukIwPEqGYJGTJe68lwUPocjWO71QOsFaySxoky7Vq7Hep1VZ4WNhoC23KBdX4'
    }
})

export default client