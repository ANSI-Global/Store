import { compress } from "compress-tag"
import { query } from "faunadb"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBSwitch,
} from "mdbreact"
import React, { useState } from "react"
import Client from "../../../../../main/faunadb"
import Table from "./variantTable"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("<p>Cat</p>")
  const [categoryID, setCategoryID] = useState<string>()
  const [images, setImages] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [warehouse, setWarehouse] = useState<string>()
  const [quantity, setQuantity] = useState<string>()
  const [variants, setVariants] = useState<string>()
  const [enabled, setEnabled] = useState<boolean>()

  const {} = props

  const q = query

  async function createProduct() {
    const ret = await Client(
      q.Create(q.Collection("products"), {
        data: {
          name,
          description,
          categoryID,
          images,
          price,
          warehouse,
          quantity,
          enabled,
        },
      })
    )
    console.info(ret)
  }

  async function updateProduct() {
    const ret = await Client(
      q.Update(q.Ref(q.Collection("products"), ""), {
        data: {
          name,
          description,
          categoryID,
          images,
          price,
          warehouse,
          quantity,
          enabled,
        },
      })
    )
    console.info(ret)
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">
              Description
            </MDBCardTitle>
            <MDBCardBody>
              <MDBInput
                label="Title"
                value={name}
                onChange={({ currentTarget }) => setName(currentTarget.value)}
              />
              <MDBInput
                type="text"
                label="Description"
                value={description}
                onChange={({ currentTarget }) =>
                  setDescription(compress(currentTarget.value))
                }
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Inventory</MDBCardTitle>
            <MDBCardBody>
              <MDBRow>
                <MDBCol>
                  Pricing
                  <br /> Price:
                  <MDBInput
                    label="Price"
                    value={price}
                    onChange={({ currentTarget }) =>
                      setPrice(currentTarget.value)
                    }
                  />
                </MDBCol>
                <MDBCol>
                  Inventory
                  <br /> Stock:
                  <MDBInput
                    label="Stock"
                    value={quantity}
                    onChange={({ currentTarget }) =>
                      setQuantity(currentTarget.value)
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  Werehouse
                  <br /> Stock:
                  <MDBInput
                    label="Warehouse"
                    value={warehouse}
                    onChange={({ currentTarget }) =>
                      setWarehouse(currentTarget.value)
                    }
                  />
                </MDBCol>
              </MDBRow>
              Enabled{" "}
              <MDBSwitch
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Variants</MDBCardTitle>
            <MDBCardBody>
              <Table variants={variants} onChange={setVariants} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">
              Additional Info
            </MDBCardTitle>
            <MDBCardBody>
              <MDBInput
                label="Category"
                value="Shoe"
                onChange={({ currentTarget }) =>
                  setCategoryID(currentTarget.value)
                }
              />
              <MDBInput type="Labels" label="Description" value="<p>Cat</p>" />
              isFeatured: <MDBSwitch />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Images</MDBCardTitle>
            <MDBCardBody>
              <img src="" alt="" />
            </MDBCardBody>
          </MDBCard>

          <MDBInput
            label="images"
            type="text"
            onChange={({ currentTarget }) => setImages(currentTarget.value)}
          />

          <MDBIcon icon="plus" />
          <MDBBtn onClick={createProduct} rounded gradient="aqua">
            Update
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
