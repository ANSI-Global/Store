import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact"
import React from "react"
import Template from "./components/product/template"
import List from "./list"
import Menu from "./menu"

const ProductsPage = ({ path }) => {
  return (
    <>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <MDBIcon icon="plus" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs="12" sm="12" md="3" lg="3" xl="3">
            <Menu />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="9" lg="9" xl="9">
            <List />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Template />
    </>
  )
}

export default ProductsPage
