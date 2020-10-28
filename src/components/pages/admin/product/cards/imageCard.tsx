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
} from "mdbreact"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addImages,
  removeImages,
} from "../../../../../state/adminProductReducer"
import "./style.sass"

interface state {
  adminProduct: {
    name: string
    images: string[]
  }
}

const ProductTemplate = () => {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const { name, images } = useSelector((state: state) => state.adminProduct)

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Images</MDBCardTitle>
            <MDBCardBody>
              {images.map((image, index) => (
                <MDBRow key={index}>
                  <MDBCol>
                    <img src={image} alt={name} className="mini-image" />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBBtn
                      onClick={() => {
                        dispatch(removeImages(index))
                      }}
                      rounded
                      floating
                      gradient="aqua"
                    >
                      <MDBIcon icon="trash-alt" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              ))}
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="images"
                    type="text"
                    onChange={({ currentTarget }) =>
                      setInputValue(currentTarget.value)
                    }
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBBtn
                    onClick={() => {
                      dispatch(addImages(inputValue))
                      setInputValue("")
                    }}
                    rounded
                    floating
                    size="sm"
                    gradient="aqua"
                  >
                    <MDBIcon icon="plus" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
