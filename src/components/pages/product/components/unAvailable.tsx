import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBRow,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
} from "mdbreact"
import React, { useState } from "react"

const ModalPage = () => {
  const [modal, setModal] = useState(false)
  const [accordion, setAccordion] = useState(1)

  const onClick = (nr: number) => () => {
    setAccordion(nr)
  }

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Launch ModalBody</MDBBtn>
      <MDBModal size="lg" isOpen={modal} toggle={toggle}>
        <MDBModalBody className="d-flex">
          <MDBCol size="5" lg="5">
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls
              showIndicators
              thumbnails
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                    alt="First slide"
                  />
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                    alt="Second slide"
                  />
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                    alt="Third slide"
                  />
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
          <MDBCol size="7" lg="7">
            <h2 className="h2-responsive product-name">
              <strong>Product Name</strong>
            </h2>
            <h4 className="h4-responsive">
              <span className="green-text">
                <strong>$49</strong>
              </span>
              <span className="grey-text ml-1">
                <small>
                  <s>$89</s>
                </small>
              </span>
            </h4>
            <div className="my-4">
              <MDBCard>
                <MDBCollapseHeader onClick={onClick(1)}>
                  Description
                  <i
                    className={
                      "ml-1 " +
                      (accordion === 1
                        ? "fa fa-angle-down rotate-icon"
                        : "fa fa-angle-down")
                    }
                  ></i>
                </MDBCollapseHeader>
                <MDBCollapse isOpen={accordion === 1}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={onClick(2)}>
                  Details
                  <i
                    className={
                      "ml-1 " +
                      (accordion === 2
                        ? "fa fa-angle-down rotate-icon"
                        : "fa fa-angle-down")
                    }
                  ></i>
                </MDBCollapseHeader>
                <MDBCollapse isOpen={accordion === 2}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={onClick(3)}>
                  Shipping
                  <i
                    className={
                      "ml-1 " +
                      (accordion === 3
                        ? "fa fa-angle-down rotate-icon"
                        : "fa fa-angle-down")
                    }
                  ></i>
                </MDBCollapseHeader>
                <MDBCollapse isOpen={accordion === 3}>
                  <MDBCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </div>
            <MDBRow>
              <MDBCol size="6">
                <MDBSelect>
                  <MDBSelectInput></MDBSelectInput>
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>
                      Choose your option
                    </MDBSelectOption>
                    <MDBSelectOption>White</MDBSelectOption>
                    <MDBSelectOption>Black</MDBSelectOption>
                    <MDBSelectOption>Pink</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
                <label>MDBSelect color</label>
              </MDBCol>
              <MDBCol size="6">
                <MDBSelect>
                  <MDBSelectInput></MDBSelectInput>
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>
                      Choose your option
                    </MDBSelectOption>
                    <MDBSelectOption>White</MDBSelectOption>
                    <MDBSelectOption>Black</MDBSelectOption>
                    <MDBSelectOption>Pink</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
                <label>MDBSelect size</label>
              </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBBtn color="secondary" className="ml-4" onClick={toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" className="ml-4" onClick={toggle}>
                Add to Cart
                <MDBIcon icon="cart-plus" className="ml-2" />
              </MDBBtn>
            </MDBRow>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  )
}

export default ModalPage
