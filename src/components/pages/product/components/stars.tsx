import { MDBIcon } from "mdbreact"
import React from "react"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

const Stars = (props: props) => {
  const { rating = 0 } = props

  return (
    <ul className="rating">
      <li>{rating <= 0 && null}</li>
      <li>{rating >= 2 && <MDBIcon icon="star" />}</li>
      <li>{rating >= 4 && <MDBIcon icon="star" />}</li>
      <li>{rating >= 6 && <MDBIcon icon="star" />}</li>
      <li>{rating >= 8 && <MDBIcon icon="star" />}</li>
      <li>{rating >= 10 && <MDBIcon icon="star" />}</li>
      <li>{Math.abs(rating % 2) == 1 && <MDBIcon icon="star-half" />}</li>
    </ul>
  )
}

export default Stars
