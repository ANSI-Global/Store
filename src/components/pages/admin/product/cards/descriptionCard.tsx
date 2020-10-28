import { compress } from "compress-tag"
import parser from "html-react-parser"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setDescription,
  setName,
} from "../../../../../state/adminProductReducer"

interface props {
  name: string
  setName: Function
  description: string
  setDescription: Function
}

interface state {
  adminProduct: {
    name: string
    description: string
  }
}

const DescriptionCard = (props: props) => {
  const { name, description } = useSelector(
    (state: state) => state.adminProduct
  )

  const dispatch = useDispatch()
  dispatch(setName(props.name))
  dispatch(setDescription(props.description))
  // dispatch(setCategoryID(parsedData.categoryID))
  // dispatch(setPrice(parsedData.price))
  // dispatch(setWarehouse(parsedData.warehouse))
  // dispatch(setQuantity(parsedData.quantity))
  // dispatch(setEnabled(parsedData.enabled))
  // dispatch(setVariants(parsedData.variants))
  // dispatch(setImages(parsedData.images))
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
              <p className="red-text">Description display as,</p>
              {parser(description)}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default DescriptionCard
