import parser from "html-react-parser"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDescription, setName } from "../../productReducer"

interface state {
  adminProduct: {
    name: string
    description: string
  }
}

const DescriptionCard = () => {
  const { name, description } = useSelector(
    (state: state) => state.adminProduct
  )

  const dispatch = useDispatch()

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">
              Description
            </MDBCardTitle>
            <MDBCardBody>
              <MDBInput
                label="Title"
                value={name}
                onChange={({ currentTarget }) =>
                  dispatch(setName(currentTarget.value))
                }
              />
              <MDBInput
                type="textarea"
                label="Description (You can enter HTML!)"
                rows="5"
                value={description.replace("<br />", "\r\n")}
                onChange={({ currentTarget }) =>
                  dispatch(
                    setDescription(
                      currentTarget.value.replace(/\r\n|\r|\n/g, "<br />")
                    )
                  )
                }
              />
              <p className="red-text">Description display as,</p>
              {parser(description)}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default DescriptionCard
