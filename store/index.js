import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

export const uri = 'https://api.graphcms.com/simple/v1/cj734fgrw0ln201107js7i4mp'

export const networkInterface = createNetworkInterface({uri})

export const client = new ApolloClient({networkInterface})

export const queryNews = gql`query {
  allNews {
    title
    detail
    datetime
  }
}
`

export const queryProducts = gql`query {
  allProducts {
    name
    detail
    href
    src {
      url
    }
    releasedAt
  }
}
`

export const state = () => ({
  news: null,
  products: null
})

export const mutations = {
  setNews (state, data) {
    state.news = data
  },
  setProducts (state, data) {
    state.products = data
  }
}

export const actions = {
  async fetchNews ({commit}) {
    const res = await client.query({query: queryNews})
    commit('setNews', res.data.allNews)
  },
  async fetchProducts ({commit}) {
    const res = await client.query({query: queryProducts})
    commit('setProducts', res.data.allProducts)
  }
}
