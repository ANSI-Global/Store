import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact"
import React from "react"
import "./components/styles.sass"

const data = [
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
    text: "First slide",
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
    text: "First slide",
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
    text: "First slide",
  },
]

const Carousel = () => (
  <>
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls
      showIndicators={false}
      className="z-depth-1 home-carousel"
      slide
    >
      <MDBCarouselInner>
        {data.map((item, index) => (
          <MDBCarouselItem key={index} itemId={index + 1}>
            <MDBView>
              <img className="d-block w-100" src={item.src} alt={item.text} />
            </MDBView>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
    <span className="home-carousel-facade" />
  </>
)

export default Carousel
