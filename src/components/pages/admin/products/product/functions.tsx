import { Client, query as q } from "faunadb"
import { product } from "./productTypes"

const client = new Client({
  secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
})

const Query = client.query
const ProductCol = q.Collection("products")
const productRef = (product: string) => q.Ref(ProductCol, product)

export async function getProduct(product: string) {
  const { data }: product = await Query(q.Get(q.Ref(ProductCol, product)))
  console.info(data)
  // parsing for react states
  const parsedData = {}
  return parsedData
}

export async function createProduct(data: {}) {
  const ret = await Query(
    q.Create(ProductCol, {
      data,
    })
  )
  console.info(ret)
}

export async function updateProduct(product: string, data?: {}) {
  const ret = await Query(
    q.Update(productRef(product), {
      data,
    })
  )
  console.info(ret)
}
