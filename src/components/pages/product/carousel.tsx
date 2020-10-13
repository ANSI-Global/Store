import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBView,
} from "mdbreact"
import React from "react"

type props = {
  images: any
}

const ImageCarousel = ({ images }: props) => (
  <MDBContainer>
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls
      showIndicators
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {images.map((image, index: number) => (
          <MDBCarouselItem key={index} itemId={index.toString()}>
            <MDBView>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </MDBView>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
)

export default ImageCarousel
