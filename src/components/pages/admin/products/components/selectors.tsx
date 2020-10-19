import React from "react"
import Dis from "./selectors/discontinuedSelect"
import Ena from "./selectors/enabledSelect"
import Onsa from "./selectors/onSaleSelect"
import Sstock from "./selectors/stockStatusSelect"

const Selectors = () => {
  return (
    <>
      <Dis />
      <Ena />
      <Onsa />
      <Sstock />
    </>
  )
}

export default Selectors
