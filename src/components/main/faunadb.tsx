import { Client } from "faunadb"

export const client = new Client({
  secret: "fnAD3FMnBSACAmL8n5spPI2z15XaJV2uE3hJkw9C",
})

export default client.query
