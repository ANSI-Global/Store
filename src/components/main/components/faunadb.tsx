import { Client } from "faunadb"

const client = new Client({ secret: process.env.FAUNADB_KEY })

export const query = client.query
export default client
