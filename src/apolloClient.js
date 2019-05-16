import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.getonsetapp.com/v1/graphql' }),
  cache: new InMemoryCache(),
});
