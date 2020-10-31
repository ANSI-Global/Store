import { Client, query as q } from "faunadb"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { product } from "./components/productTypes"
import Page from "./page"
import {
  setCategoryID,
  setDescription,
  setEnabled,
  setFeatured,
  setID,
  setImages,
  setName,
  setPrice,
  setQuantity,
  setVariants,
  setWarehouse,
} from "./productReducer"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const [isError, setIsError] = useState(false)
  const { id } = props

  const dispatch = useDispatch()

  const client = new Client({
    secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
  })

  const ProductCol = q.Collection("products")

  useEffect(() => {
    ;(async () => {
      try {
        if (id) {
          const { data }: product = await client.query(
            q.Get(q.Ref(ProductCol, id))
          )
          const {
            name,
            description,
            categoryID,
            price,
            warehouse,
            quantity,
            enabled,
            featured,
            variants,
            images,
          } = data
          dispatch(setID(id))
          dispatch(setName(name))
          dispatch(setDescription(description))
          dispatch(setCategoryID(categoryID.toString()))
          dispatch(setPrice(price.toString()))
          dispatch(setWarehouse(warehouse.toString()))
          dispatch(setQuantity(quantity.toString()))
          dispatch(setEnabled(enabled))
          dispatch(setFeatured(featured))
          dispatch(setVariants(variants))
          dispatch(setImages(images))
        }
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
    })()
  }, [id])

  if (!isError) {
    return <Page />
  } else {
    return <p>Ooops Something went wrong!</p>
  }
}

export default ProductTemplate
