import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact"
import React, { useState } from "react"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5
  uid: string
  isReviewed?: boolean
  isPurchaced?: boolean
}

const userRatingBar = (props: props) => {
  const { rating = 0, uid, isReviewed = false, isPurchaced = false } = props
  const [stars, setStars] = useState(rating)

  // useEffect(()=>{query(q. )},[stars])
  // if product review exist from user then update
  ////if it was bought add with bought tag
  // else create a review with uid

  return (
    <>
      <MDBContainer fluid>
        <MDBCol>Your rating: </MDBCol>
        <MDBRow>
          <MDBCol>
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default userRatingBar
