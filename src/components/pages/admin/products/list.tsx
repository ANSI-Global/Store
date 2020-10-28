import { graphql, Link, useStaticQuery } from "gatsby"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import React from "react"

interface data {
  fauna: {
    allProducts: {
      data: {
        _id: number
        name: string
        images: [string]
        categoryID: number
        price: number
        quantity: number
      }[]
    }
  }
}

const BasicTable = () => {
  const data: data = useStaticQuery(graphql`
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
        <MDBTableBody color="cyan">
          {data.fauna.allProducts.data.map((item, index: number) => {
            {
              const { _id, name, images, categoryID, price, quantity } = item
              return (
                <tr key={index}>
                  <Link to={`/admin/product/${_id}`}>
                    <td>{index}</td>
                    <td>{name}</td>
                    <td>
                      <img
                        src={images[0]}
                        alt={name}
                        style={{ maxHeight: "10rem", maxWidth: "10rem" }}
                      />
                    </td>
                    <td>{categoryID}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                  </Link>
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
