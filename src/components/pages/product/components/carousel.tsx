import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import CarouselCard from "./components/carouselCard"

interface props {
  data: {
    src: string
    title: string
    id: string
  }[]
}

const Carousel = (props: props) => {
  const { data } = props
  if (data) {
    return (
      <MDBContainer fluid>
        <MDBRow>
          {data.map((item, index) => {
            return (
              <MDBCol key={index}>
                <CarouselCard src={item.src} title={item.title} id={item.id} />
              </MDBCol>
            )
          })}
        </MDBRow>
      </MDBContainer>
    )
  } else {
    return null
  }
}

export default Carousel
