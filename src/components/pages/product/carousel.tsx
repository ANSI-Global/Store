import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBView,
} from "mdbreact"
import React from "react"

const CarouselPage = ({ images }: { images: string[] }) => (
  <MDBContainer>
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls
      showIndicators
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {images.map((image: string, index: number) => (
          <MDBCarouselItem itemId={index.toString()}>
            <MDBView>
              <img className="d-block w-100" src={image} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
)

export default CarouselPage
