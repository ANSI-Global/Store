import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBTooltip,
} from "mdbreact"
import React from "react"

const data = [
  {
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg",
    title: "Leather boots",
  },
  {
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg",
    title: "Slim jeans",
  },
  {
    image: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
    title: "Denim shorts",
  },
  {
    image: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
    title: "Denim shorts",
  },
  {
    image: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
    title: "Denim shorts",
  },
  {
    image: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
    title: "Denim shorts",
  },
]

const EcommercePage = () => {
  if (data) {
    return (
      <section className="text-center my-5">
        <MDBCarousel
          activeItem={1}
          length={4}
          slide
          showControls={false}
          showIndicators={false}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              {data.map((item, index) => {
                return (
                  <MDBCarouselItem itemId={index}>
                    <MDBCol md="4">
                      <MDBCard narrow ecommerce className="mb-2">
                        <MDBCardImage
                          cascade
                          top
                          src={item.image}
                          alt={item.title}
                          zoom
                          hover
                          overlay="Meow"
                        />
                        <MDBCardBody cascade>
                          <MDBCardTitle>
                            <strong>
                              <a href="#!"></a>
                            </strong>
                          </MDBCardTitle>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="clearfix d-none d-md-block">
                      <MDBCard narrow ecommerce className="mb-2">
                        <MDBCardImage cascade top src="" alt="sample photo" />
                        <MDBCardBody cascade>
                          <MDBCardTitle>
                            <strong>
                              <a href="#!"></a>
                            </strong>
                          </MDBCardTitle>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="clearfix d-none d-md-block">
                      <MDBCard narrow ecommerce className="mb-2">
                        <MDBCardImage cascade top src="" alt="sample photo" />
                        <MDBCardBody cascade>
                          <MDBCardTitle>
                            <strong>
                              <a href="#!"></a>
                            </strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci.
                          </MDBCardText>
                          <MDBCardFooter className="px-1">
                            <span className="float-left">49$</span>
                            <span className="float-right">
                              <MDBTooltip domElement placement="top">
                                <i className="grey-text fa fa-eye mr-3" />
                                <span>Quick Look</span>
                              </MDBTooltip>
                              <MDBTooltip domElement placement="top">
                                <i className="grey-text fa fa-heart" />
                                <span>Add to Whishlist</span>
                              </MDBTooltip>
                            </span>
                          </MDBCardFooter>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                )
              })}
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    )
  } else {
    return null
  }
}

export default EcommercePage
