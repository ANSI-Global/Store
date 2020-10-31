import { MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdbreact"
import React, { FC } from "react"
import { useSelector } from "react-redux"
import "./styles.sass"

interface state {
  products: {
    departments: []
    reviews: []
    brands: []
    prices: [string]
    operatingSytems: []
    condition: [string]
  }
}

const ProductListMenu: FC = () => {
  const {
    departments,
    reviews,
    brands,
    prices,
    operatingSytems,
    condition,
  } = useSelector((state: state) => state.products)

  return (
    <>
      <div className="white-text menu-border">
        <h6>Department</h6>
        <ul>
          {departments.map((item, index) => (
            <li key={index} className="list">
              {item}
            </li>
          ))}
          <li>
            See All 25 Departments
            <MDBIcon icon="angle-down" />
          </li>
        </ul>

        <h6>Avg. Customer Review</h6>

        <ul>
          <li>4 Stars & Up & Up</li>
          <li>3 Stars & Up & Up</li>
          <li>2 Stars & Up & Up</li>
          <li>1 Star & Up & Up</li>
        </ul>

        <h6>Brand</h6>
        <ul>
          {brands.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li>
            See more <MDBIcon icon="angle-down" />
          </li>
        </ul>

        <h6>Price</h6>
        <ul>
          <li>Under $10</li>
          <li>$10 to $15</li>
          <li>$15 to $25</li>
          <li>$25 to $35</li>
          <li>$35 & Above</li>
        </ul>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <MDBInput label="Min $" />
            </MDBCol>
            <MDBCol>
              <MDBInput label="Max $" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h6>PC Game Operating System</h6>
        <ul>
          {operatingSytems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h6>Condition</h6>
        <ul>
          <li>New</li>
          <li>Used</li>
        </ul>
      </div>
    </>
  )
}

export default ProductListMenu
