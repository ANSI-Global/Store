import { Client } from "faunadb"

const client = new Client({
  secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
})

export default client
