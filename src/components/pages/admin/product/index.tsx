import { Client, query as q } from "faunadb"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
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
} from "./adminProductReducer"
import Page from "./page"
import { product } from "./productTypes"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const { id } = props

  const dispatch = useDispatch()

  const client = new Client({
    secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
  })

  const ProductCol = q.Collection("products")

  useEffect(() => {
    ;(async () => {
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
    })()
  }, [id])

  return <Page />
}

export default ProductTemplate
