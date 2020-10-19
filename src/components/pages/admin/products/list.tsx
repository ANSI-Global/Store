import { graphql, useStaticQuery } from "gatsby"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import React from "react"

const BasicTable = () => {
  const data = useStaticQuery(graphql`
    {
      fauna {
        allProducts {
          data {
            _id
            name
            images
            categoryID
            price
            quantity
          }
        }
      }
    }
  `)

  if (data.fauna.allProducts.data) {
    return (
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>CategoryID</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.fauna.allProducts.data.map((item, index) => {
            {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.images[0]} alt={item.name} />
                  </td>
                  <td>{item.categoryID}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              )
            }
          })}
        </MDBTableBody>
      </MDBTable>
    )
  } else {
    return null
  }
}

export default BasicTable
