import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Layout from "../../../main/adminLayout"
import List from "./list"
import Menu from "./menu"

const Orders = () => {
  return (
    <>
      <Layout>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="3">
              <Menu />
            </MDBCol>
            <MDBCol>
              <List />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}

export default Orders
