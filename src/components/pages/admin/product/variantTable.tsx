import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVariants } from "../../../../state/adminProductReducer"

interface state {
  adminProduct: {
    id: number
    variants: [string]
  }
}

const BasicTable = () => {
  const { variants } = useSelector((state: state) => state.adminProduct)

  const dispatch = useDispatch()
  function cat() {
    dispatch(setVariants)
  }

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
