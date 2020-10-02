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

const EcommercePage = () => (
  <section className="text-center my-5">
    <MDBCarousel
      activeItem={1}
      length={3}
      slide
      showControls={false}
      showIndicators
      multiItem
    >
      <MDBCarouselInner>
        <MDBRow>
          <MDBCarouselItem itemId="1">
            <MDBCol md="4">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Leather boots</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Slim jeans</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim shorts</a>
                    </strong>
                  </MDBCardTitle>
                  <MDBCardText>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci.
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
          <MDBCarouselItem itemId="2">
            <MDBCol md="4">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Leather boots</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Slim jeans</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim shorts</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBCol md="4">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Leather boots</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <a href="#!" className="text-muted">
                    <h5>Jeans</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Slim jeans</a>
                    </strong>
                  </MDBCardTitle>

                  <MDBCardFooter className="px-1">
                    <span className="float-left">99$</span>
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
            <MDBCol md="4" className="clearfix d-none d-md-block">
              <MDBCard narrow ecommerce className="mb-2">
                <MDBCardImage
                  cascade
                  top
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg"
                  alt="sample photo"
                />
                <MDBCardBody cascade>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim shorts</a>
                    </strong>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCarouselItem>
        </MDBRow>
      </MDBCarouselInner>
    </MDBCarousel>
  </section>
)

export default EcommercePage
