import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React, { useState } from "react"

const Image = ({ images }) => {
  const [imageNo, setImageNo] = useState(1)
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="2">
          <div className="d-flex flex-column">
            {images.map(
              (image: { src: string; alt: string }, index: number) => (
                <button
                  key={index}
                  onClick={() => setImageNo(index)}
                  className="p-2 col-example text-left"
                  style={{ display: "none" }}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              )
            )}
          </div>
        </MDBCol>
        <MDBCol>
          {images.map((image: { src: string; alt: string }, index: number) => {
            index == imageNo ? (
              <img key={index} src={image.src} alt={image.alt} />
            ) : null
          })}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Image
