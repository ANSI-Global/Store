import { Client } from "faunadb"

export const client = new Client({ secret: "YOUR_FAUNADB_SECRET" })

export default client.query
