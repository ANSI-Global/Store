import { navigate } from "gatsby"
import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact"
import React, { useState } from "react"

const FormPage = ({ path }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  if (user == "admin" && pass == "1234") {
    setisLoggedIn(true)
    console.info(`You have been logged in ${user}`)
    window.sessionStorage.setItem("admin", "true")
  }

  if (typeof window !== "undefined") {
    if (isLoggedIn) {
      navigate("/admin")
    }
  } else {
    console.info("This is SSR")
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                onChange={event => setUser(event.currentTarget.value)}
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                onChange={event => setPass(event.currentTarget.value)}
                validate
              />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FormPage
