import React from "react"
import Product from "./components/itemList"

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <Product title="Our bestsellers" />
      <Product title="Featured" />
      <Product title="Electronics" />
      <Product title="Home Appliance" />
      <Product title="Materials" />
      <Product title="Arts and other" />
    </section>
  )
}

export default EcommercePage
