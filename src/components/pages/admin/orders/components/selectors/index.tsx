import React from "react"
import Cancelled from "./cancelledSelect"
import Closed from "./closedSelect"
import Delivered from "./deliverdSelect"
import Draft from "./draftSelect"
import Hold from "./holdSelect"
import Paid from "./paidSelect"

const Selectors = () => {
  return (
    <>
      <Draft />
      <Hold />
      <Paid />
      <Delivered />
      <Cancelled />
      <Closed />
    </>
  )
}

export default Selectors
