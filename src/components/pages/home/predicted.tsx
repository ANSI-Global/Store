import React from "react"
import ItemList from "./components/itemList"

interface props {
  data: {
    allCategories: {
      data: {
        _id: number
        label: string
      }[]
    }
    allProducts: {
      data: {
        _id: number
        name: string
        images: [string]
        price: number
      }[]
    }
  }
}

const Caruosel = (props: props) => {
  const Data = [
    { name: "Cat", src: "https://placekitten.com/200/300", price: 1000 },
  ]

  return (
    <>
      <ItemList title="Our Recomendations" data={props.data.allProducts.data} />
    </>
  )
}

export default Caruosel
