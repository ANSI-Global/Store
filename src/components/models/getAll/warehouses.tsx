import { query as q } from "faunadb"
import client from "../client"

interface product {
  data: {
    fauna: {
      allCategories: {
        data: {
          _id: number
          label: string
        }
      }
      allProducts: {
        data: {
          _id: number
          name: string
          images: string
          price: number
        }
      }
    }
  }
}

const FeaturedModel = async () => {
  const { data }: product = await client.query(q.Get(q.Collection("products")))
  console.log(data)

  return data
}

export default FeaturedModel()
