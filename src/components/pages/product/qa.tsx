import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow } from "mdbreact"
import React from "react"

const SocialPage = () => (
  <MDBCard
    className="my-5 px-5 pt-4"
    style={{ fontWeight: 300, maxWidth: 600 }}
  >
    <MDBCardBody className="py-0">
      <MDBRow>
        <div className="mdb-feed">
          <div className="news">
            <div className="label">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                alt=""
                className="rounded-circle z-depth-1-half"
              />
            </div>
            <div className="excerpt">
              <div className="brief">
                <a href="#!" className="name">
                  John Doe
                </a>{" "}
                <br />
                What is the value of this?
                <div className="date">1 hour ago</div>
              </div>
              <div className="feed-footer">
                <a href="#!" className="like">
                  <MDBIcon icon="heart" />
                  <span>5 likes</span>
                </a>
              </div>
              <div>
                Anwsers,
                <ul>
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>{" "}
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>{" "}
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>
                  <MDBBtn>
                    <MDBIcon icon="angle-down" /> View more....
                  </MDBBtn>
                </ul>
              </div>
            </div>
          </div>
          <br />
          {" aaaaaaaaaaaaaaaaaa"}{" "}
          <div className="news">
            <div className="label">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                alt=""
                className="rounded-circle z-depth-1-half"
              />
            </div>
            <div className="excerpt">
              <div className="brief">
                <a href="#!" className="name">
                  John Doe
                </a>{" "}
                <br />
                What is the value of this?
                <div className="date">1 hour ago</div>
              </div>
              <div className="feed-footer">
                <a href="#!" className="like">
                  <MDBIcon icon="heart" />
                  <span>5 likes</span>
                </a>
              </div>
              <div>
                Anwsers,
                <ul>
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>{" "}
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>{" "}
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <div className="label">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol>Danny Rosolve , 1 Hour ago</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>Its, 3$</MDBCol>
                    </MDBRow>{" "}
                  </li>
                  <MDBBtn>
                    <MDBIcon icon="angle-down" /> View more....
                  </MDBBtn>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
)

export default SocialPage
