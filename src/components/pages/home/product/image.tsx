import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="2">
          <a>
            <MDBRow>
              <MDBCol>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </MDBCol>
            </MDBRow>
          </a>
          <a>
            <MDBRow>
              <MDBCol>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </MDBCol>
            </MDBRow>
          </a>
          <a>
            <MDBRow>
              <MDBCol>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </MDBCol>
            </MDBRow>
          </a>
          <a>
            <MDBRow>
              <MDBCol>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </MDBCol>
            </MDBRow>
          </a>
          <a>
            <MDBRow>
              <MDBCol>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </MDBCol>
            </MDBRow>
          </a>
        </MDBCol>
        <MDBCol>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Image
