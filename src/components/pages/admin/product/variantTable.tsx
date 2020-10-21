import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import React from "react"

interface props {
  variants: any
  onChange: Function
}

const BasicTable = (props: props) => {
  const { variants } = props

  if (variants) {
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    )
  } else {
    return null
  }
}

export default BasicTable
