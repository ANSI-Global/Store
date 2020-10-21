import { compress } from "compress-tag"
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

interface props {
  name: string
  setName: Function
  description: string
  setDescription: Function
}

const DescriptionCard = (props: props) => {
  const { name, setName, description, setDescription } = props

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
                onChange={({ currentTarget }) => setName(currentTarget.value)}
              />
              <MDBInput
                type="text"
                label="Description"
                value={description}
                onChange={({ currentTarget }) =>
                  setDescription(compress(currentTarget.value))
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
