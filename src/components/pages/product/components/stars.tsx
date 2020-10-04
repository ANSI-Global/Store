import { MDBIcon } from "mdbreact"
import React from "react"

const Stars = ({ rating }) => (
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

export default Stars
