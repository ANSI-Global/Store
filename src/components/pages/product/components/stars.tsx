import { MDBIcon } from "mdbreact"
import React from "react"

interface props {
  rating?: number
}

const Stars = (props: props) => {
  const { rating = 0 } = props
  switch (rating) {
    case 1:
      return (
        <ul className="rating">
          <li>
            <MDBIcon icon="star" />
          </li>
        </ul>
      )
    case 2:
      return (
        <ul className="rating">
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
        </ul>
      )
    case 3:
      return (
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
        </ul>
      )
    case 4:
      return (
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
        </ul>
      )
    case 5:
      return (
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
      )

    default:
      return null
  }
}

export default Stars
