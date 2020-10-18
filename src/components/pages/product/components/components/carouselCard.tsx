import { Link } from "gatsby"
import { MDBMask, MDBView } from "mdbreact"
import React from "react"
import "./style.sass"

interface props {
  src: string
  title: string
  id: string
}

const CarouselCard = (props: props) => {
  const { src, title, id } = props
  return (
    <>
      <Link to={`/product/${id}`}>
        <MDBView rounded waves>
          <img src={src} className="img-fluid" alt={title} />
          <MDBMask className="flex-center" overlay="teal-slight">
            <p className="white-text">{title}</p>
          </MDBMask>
        </MDBView>
      </Link>
    </>
  )
}

export default CarouselCard
