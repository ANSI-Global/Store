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
import React, { useEffect, useState } from "react"
import "./style.sass"

interface props {
  product: string
  images: string[]
  setImages: Function
}

const ProductTemplate = (props: props) => {
  const [inputValue, setInputValue] = useState("")
  const [imageList, setImageList] = useState(props.images)
  const { product, images, setImages } = props
  const imageArray = imageList

  useEffect(() => setImages(imageList), [imageList])
  useEffect(() => setImages(imageArray), [imageArray])

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
                    <img src={image} alt={product} className="mini-image" />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBBtn
                      onClick={() => {
                        imageArray.splice(index)
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
                      setImageList(imageList => [...imageList, inputValue])
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
