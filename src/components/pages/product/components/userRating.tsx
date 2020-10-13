import { useAuth } from "gatsby-theme-firebase"
import React, { useEffect, useState } from "react"
import UserRatingsBar from "./components/userRatingBar"

interface props {
  productID: string
  fauna:any
}

const UserRating = (props: props) => {
  const [isReviewed, setIsReviewed] = useState(false)
  const [isPurchaced, setIsPurchaced] = useState(false)
  const [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(null)
  const [isFetching, setIsFetching] = useState(true)

  const { isLoading, isLoggedIn,profile } = useAuth()



  useEffect(() => {
    // checking if user rated and how much
    props.fauna.allProducts.data.map(item => {
      item.reviews.map(review=>{
        if ( review.uid== profile.uid) {
          setRating(review.rating)
          setIsReviewed(true)
        }
        else {setIsReviewed(false)}
      })
 
    })
    // checking if user bought the product
    props.fauna.allOrders.data.map(order => {
      order.products.map(product=>{
        if ( product._id== props.productID) {
          setIsPurchaced(true)
        }
        else {setIsPurchaced(false)}
      })
 
    })
    setIsFetching(false)
  }, [])

  if (!isLoading && !isFetching) {
    if (isLoggedIn) {
      return (<UserRatingsBar uid={profile.uid} rating={rating} isReviewed={isReviewed} isPurchaced={isPurchaced}/>)
    } else {
      return null
    }
  } else {
    return <p>Loading...</p>
  }
}

export default UserRating
