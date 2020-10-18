import parser from "html-react-parser"
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact"
import React from "react"
import { format } from "timeago.js"
import Stars from "./components/stars"

const Data = [
  {
    name: "Jhon Doe",
    image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
    time: "2020-10-18T18:15:23.131Z",
    stars: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipisic",
  },
  {
    name: "Jhon Doe",
    image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
    time: new Date(),
    stars: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipisic",
  },
  {
    name: "Jhon Doe",
    image: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
    time: "2020-10-18T18:15:23.131Z",
    stars: 1,
    review: "Lorem ipsum dolor sit amet, consectetur adipisic",
  },
]

const Reviews = () => (
  <MDBCard
    className="my-5 px-5 pt-4"
    style={{ fontWeight: 300, maxWidth: 600 }}
  >
    <MDBCardBody className="py-0">
      <MDBRow>
        <div className="mdb-feed">
          {Data.map((item, index) => {
            return (
              <div key={index} className="news">
                <div className="label">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle z-depth-1-half"
                  />
                </div>
                <div className="excerpt">
                  <div className="brief">
                    <a href="#!" className="name">
                      {item.name}
                    </a>
                    <div className="date">{format(item.stars)}</div>
                  </div>
                  <div className="feed-footer">
                    <span className="like">
                      <Stars rating={item.stars} />
                    </span>
                  </div>
                  <div className="added-text">
                    {item.review && parser(item.review)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
)

export default Reviews
