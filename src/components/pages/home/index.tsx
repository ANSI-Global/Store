import { useAuth } from "gatsby-theme-firebase"
import React from "react"
import Carousel from "./carousel"
import Predicted from "./predicted"
import ProductsList from "./productsList"

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

const HomePage = (props: props) => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <Carousel />
      <section className="text-center my-5">
        {isLoggedIn ? (
          <Predicted data={props.data} />
        ) : (
          <p className="text-center">Login to see our recomendations!</p>
        )}
        <ProductsList data={props.data} />
      </section>
    </>
  )
}

export default HomePage
