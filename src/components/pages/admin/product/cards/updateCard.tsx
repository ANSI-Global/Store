import { Client, query as q } from "faunadb"
import { toInteger } from "lodash"
import { MDBBtn, MDBIcon } from "mdbreact"
import React from "react"
import { useSelector } from "react-redux"

interface state {
  adminProduct: {
    id: number
    name: string
    description: string
    categoryID
    price
    warehouse
    quantity
    enabled
    variants
    images
  }
}

const UpdateCard = () => {
  const {
    id,
    name,
    description,
    categoryID,
    price,
    warehouse,
    quantity,
    enabled,
    variants,
    images,
  } = useSelector((state: state) => state.adminProduct)

  const client = new Client({
    secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
  })

  const ProductCol = q.Collection("products")
  const productRef = (product: string) => q.Ref(ProductCol, product)

  const parse = {
    name,
    description,
    categoryID: toInteger(categoryID),
    images,
    price: toInteger(price),
    warehouse: toInteger(warehouse),
    quantity: toInteger(quantity),
    enabled,
    variants,
  }

  const createProduct = async () => {
    const parsedData = parse
    const ret = await client.query(
      q.Create(ProductCol, {
        parsedData,
      })
    )
    console.info(ret)
  }

  const updateProduct = async () => {
    const parsedData = parse
    const ret = await client.query(
      q.Update(productRef(id.toString()), {
        parsedData,
      })
    )
    console.info(ret)
  }

  return (
    <>
      {id ? (
        <MDBBtn onClick={() => updateProduct()} rounded gradient="aqua">
          Update
        </MDBBtn>
      ) : (
        <MDBBtn
          onClick={() => createProduct()}
          rounded
          floating
          gradient="aqua"
        >
          <MDBIcon icon="plus" />
        </MDBBtn>
      )}
    </>
  )
}

export default UpdateCard
