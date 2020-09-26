import { MDBCol, MDBIcon, MDBRow } from "mdbreact"
import React from "react"

const SelectPage = () => {
  return (
    <>
      <MDBRow>
        <MDBCol size="2">
          <MDBIcon icon="folder-open" size="2x" />
        </MDBCol>
        <MDBCol>All Status</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="2">
          <MDBIcon icon="cog" size="2x" />
        </MDBCol>
        <MDBCol>Manage Status</MDBCol>
      </MDBRow>
    </>
  )
}

export default SelectPage
