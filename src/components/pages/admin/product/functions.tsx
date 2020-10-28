import { Client, query as q } from "faunadb"
import { toInteger } from "lodash"

const client = new Client({
  secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
})

const ProductCol = q.Collection("products")
const productRef = (product: string) => q.Ref(ProductCol, product)

const parse = (data: any) => {
  // parsing strings to fauna types
  return {
    name: data.name,
    description: data.description,
    categoryID: toInteger(data.categoryID),
    images: data.images,
    price: toInteger(data.price),
    warehouse: toInteger(data.warehouse),
    quantity: toInteger(data.quantity),
    enabled: data.enabled,
  }
}

export async function createProduct(data: {}) {
  const parsedData = parse(data)
  const ret = await client.query(
    q.Create(ProductCol, {
      parsedData,
    })
  )
  console.info(ret)
}

export async function updateProduct(product: string, data?: {}) {
  const parsedData = parse(data)
  const ret = await client.query(
    q.Update(productRef(product), {
      parsedData,
    })
  )
  console.info(ret)
}
