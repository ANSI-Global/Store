import { Client, query as q } from "faunadb"
import { toInteger } from "lodash"
import { MDBCardBody, MDBRow } from "mdbreact"
import { useEffect, useState } from "react"
import AdditionalCard from "./additionalCard"
import DescriptionCard from "./descriptionCard"
import { getProduct } from "./functions"
import ImageCard from "./imageCard"
import InventoryCard from "./inventoryCard"
import { product } from "./productTypes"
import Table from "./variantTable"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [categoryID, setCategoryID] = useState<string>("0")
  const [price, setPrice] = useState<string>("0")
  const [warehouse, setWarehouse] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("0")
  const [enabled, setEnabled] = useState<boolean>(false)
  const [variants, setVariants] = useState<number[]>([])
  const [images, setImages] = useState<[string]>([""])

  const { id } = props

  const client = new Client({
    secret: process.env.GATSBY_FAUNADB_SERVER_KEY,
  })

  const variantsList = variants

  async function setProduct(product: string) {
    const data = getProduct
    setName(data.name)
    setDescription(data.description)
    setCategoryID(data.categoryID.toString())
    setPrice(data.price.toString())
    setWarehouse(data.warehouse.toString())
    setQuantity(data.quantity.toString())
    setEnabled(data.enabled)
    variantsList.push(...data.variants)
    setImages(data.images)
  }

  useEffect(() => {
    if (id) {
      getProduct(id)
    }
  }, [id])

  useEffect(() => setVariants(variantsList), [variantsList])

  const data = {
    name,
    description,
    categoryID: toInteger(categoryID),
    images,
    price: toInteger(price),
    warehouse: toInteger(warehouse),
    quantity: toInteger(quantity),
    enabled,
  }

  async function createProduct(data: {}) {
    const ret = await client.query(
      q.Create(q.Collection("products"), {
        data,
      })
    )
    console.info(ret)
  }

  async function updateProduct(product: string, data?: {}) {
    const ret = await client.query(
      q.Update(q.Ref(q.Collection("products"), product), {
        data,
      })
    )
    console.info(ret)
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <DescriptionCard
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <InventoryCard
            price={price}
            setPrice={setPrice}
            quantity={quantity}
            setQuantity={setQuantity}
            warehouse={warehouse}
            setWarehouse={setWarehouse}
            enabled={enabled}
            setEnabled={setEnabled}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Variants</MDBCardTitle>
            <MDBCardBody>
              <Table variants={variants} onChange={setDescription} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <AdditionalCard setCategoryID={setCategoryID} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <ImageCard product={name} images={images} setImages={setImages} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          {id ? (
            <MDBBtn onClick={createProduct} rounded gradient="aqua">
              Update
            </MDBBtn>
          ) : (
            <MDBBtn rounded floating gradient="aqua">
              <MDBIcon icon="plus" />
            </MDBBtn>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
