import React from "react"
import ItemList from "./components/itemList"

const Caruosel = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Recomendations
      </h2>
      <ItemList title="Our Recomendations" />
    </section>
  )
}

export default Caruosel
