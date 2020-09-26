import {
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
} from "mdbreact"
import React from "react"

const SelectPage = () => {
  return (
    <>
      <MDBSelect color="primary" label="Draft">
        <MDBSelectInput selected="Choose your option" />
        <MDBSelectOptions>
          <MDBSelectOption disabled>Choose your option</MDBSelectOption>
          <MDBSelectOption value="1" selected>
            All
          </MDBSelectOption>
          <MDBSelectOption value="2">Yes</MDBSelectOption>
          <MDBSelectOption value="3">No</MDBSelectOption>
        </MDBSelectOptions>
      </MDBSelect>
    </>
  )
}

export default SelectPage
