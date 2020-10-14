import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from "mdbreact"
import React from "react"

const EcommercePage = ({ data }) => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Denim trousers</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>49$</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-shopping-cart mr-3" />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-share-alt mr-3" />
                    <span>Share</span>
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
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shoes</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">High heels</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>89$</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-shopping-cart  ml-3" />
                    <span>Add to cart</span>
                  </MDBTooltip>

                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-share-alt  ml-3" />
                    <span>Share</span>
                  </MDBTooltip>

                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-heart  ml-3" />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Brown coat</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star-half" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>59$</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-shopping-cart mr-3" />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-share-alt mr-3" />
                    <span>Share</span>
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
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Blouses</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Shirt</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>119$</strong>
                </span>
                <span className="float-right">
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-shopping-cart mr-3" />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement="top">
                    <i className="grey-text fa fa-share-alt mr-3" />
                    <span>Share</span>
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
      </MDBRow>
    </section>
  )
}

export default EcommercePage