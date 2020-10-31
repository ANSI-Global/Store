import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSwitch,
} from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryID, setFeatured } from "../../productReducer"

interface state {
  adminProduct: {
    categoryID: string
    featured: boolean
  }
}

const AdditionalCard = () => {
  const { categoryID, featured } = useSelector(
    (state: state) => state.adminProduct
  )

  const dispatch = useDispatch()

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">
              Additional Info
            </MDBCardTitle>
            <MDBCardBody>
              <MDBInput
                label="Category"
                value={categoryID}
                onChange={({ currentTarget }) =>
                  dispatch(setCategoryID(currentTarget.value))
                }
              />
              <MDBInput type="Labels" label="Description" value="<p>Cat</p>" />
              IsFeatured:{" "}
              <MDBSwitch
                checked={featured}
                onChange={() => dispatch(setFeatured(!featured))}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default AdditionalCard
