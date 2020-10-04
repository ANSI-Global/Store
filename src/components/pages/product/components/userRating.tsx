import { MDBIcon } from "mdbreact"
import React, { useState } from "react"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

const Stars = (props: props) => {
  const { rating = 0 } = props
  const [stars, setStars] = useState(rating)

  const ifStars = (value?: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (true) {
      // check if user logged
      // send the rating to server with uid
    } else {
      // else send the rating to server with guest status
    }
  }

  return (
    <>
      <ul className="rating">
        <li>{stars <= 0 && null}</li>
        <li>
          {stars >= 1 ? (
            <MDBIcon icon="star" onClick={() => setStars(1)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(1)} />
          )}
        </li>
        <li>
          {stars >= 2 ? (
            <MDBIcon icon="star" onClick={() => setStars(2)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(2)} />
          )}
        </li>
        <li>
          {stars >= 3 ? (
            <MDBIcon icon="star" onClick={() => setStars(3)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(3)} />
          )}
        </li>
        <li>
          {stars >= 4 ? (
            <MDBIcon icon="star" onClick={() => setStars(4)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(4)} />
          )}
        </li>
        <li>
          {stars >= 5 ? (
            <MDBIcon icon="star" onClick={() => setStars(5)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(5)} />
          )}
        </li>
      </ul>
    </>
  )
}

export default Stars
