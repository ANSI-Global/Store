import React from "react"
import Product from "./components/itemList"

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h3 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h3>
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
