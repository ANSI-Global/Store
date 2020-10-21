import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSwitch,
} from "mdbreact"
import React, { useState } from "react"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("<p>Cat</p>")
  const [categoryID, setCategoryID] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [warehouse, setWarehouse] = useState<string>()
  const [quantity, setQuantity] = useState<string>()
  const [variants, setVariants] = useState<string>()
  const [enabled, setEnabled] = useState<boolean>()
  const images = []

  const {} = props

  return (
    <MDBContainer>
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
    </MDBContainer>
  )
}

export default ProductTemplate
