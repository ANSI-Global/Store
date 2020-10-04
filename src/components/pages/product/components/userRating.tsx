import { MDBIcon } from "mdbreact"
import React, { useState } from "react"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

const Stars = (props: props) => {
  const { rating = 0 } = props
  const [stars, setStars] = useState(rating)

  const ifStars = (value?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => {
    if (true) {
      // check if user logged
      setStars(value)
    }
  }

  return (
    <>
      Your rating:
      <ul className="rating">
        <li>{stars <= 0 && null}</li>
        <li>
          {stars >= 2 ? (
            <MDBIcon icon="star" onClick={() => setStars(2)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(2)} />
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
          {stars >= 6 ? (
            <MDBIcon icon="star" onClick={() => setStars(6)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(6)} />
          )}
        </li>
        <li>
          {stars >= 8 ? (
            <MDBIcon icon="star" onClick={() => setStars(8)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(8)} />
          )}
        </li>
        <li>
          {stars >= 10 ? (
            <MDBIcon icon="star" onClick={() => setStars(10)} />
          ) : (
            <MDBIcon far icon="star" onClick={() => setStars(10)} />
          )}
        </li>
        <li>
          {Math.abs(stars % 2) == 1 && (
            <MDBIcon icon="star-half" onClick={() => setStars(2)} />
          )}
        </li>
      </ul>
    </>
  )
}

export default Stars
