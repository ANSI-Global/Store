// @ts-ignore
import { gql } from "https://deno.land/x/oak_graphql/mod.ts"

const types = (gql as any)`
type User {
  firstName: String
  lastName: String
}

input UserInput {
  firstName: String
  lastName: String
}

type ResolveType {
  done: Boolean
}

type SocialMedia {
    facebookUsers: Int!
    googleUsers: Int!
    twitterUsers: Int!
}

type UserStatistics {
    visitors: Int!
    uniquevisitors: Int!
    newUsers: Int!
}

type Statistics {
    socialMedia: SocialMedia
    orders: Int!
    sales: Int!
    users: UserStatistics
}

type HomePage {
  product: String
}

type SocialLinks {
  facebook: String
  twitter: String
  google: String
  linkedin: String
}

type Contact {
  address: String!
  email: String!
  phone: String
}

type FooterPage {
  companyName: String!
  description: String!
  contact: Contact
  socialLinks: SocialLinks
}

type Pages {
  home: HomePage
  footer: FooterPage
}

type Query {
  getUser(id: String): User 
  getStatistics: Statistics
  getPages: Pages
  sendMail(email: String!):String
  status: String!
}

type Mutation {
  setUser(input: UserInput!): ResolveType!
}
`

export default types
