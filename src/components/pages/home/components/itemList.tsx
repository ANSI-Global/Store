import { navigate } from "gatsby"
import { MDBBtn } from "mdbreact"
import React, { useEffect, useRef } from "react"
import Item from "./item"
import "./styles.sass"

interface props {
  title: string
  data?: { _id: number; name: string; images: [string]; price: number }[]
}

const ItemList = (props: props) => {
  const { title, data } = props
  const scrollBar = useRef<HTMLDivElement>()

  function autoScroll() {
    const scroll = scrollBar.current
    if (scroll.scrollBy) {
      self.setInterval(() => {
        if (scroll.scrollLeft < scroll.scrollWidth / 3) {
          scroll.scrollBy(1, 0)
        } else {
          scroll.scrollBy(-scroll.scrollWidth / 3, 0)
        }
      }, 30)
    }
  }

  useEffect(() => autoScroll(), [30])

  return (
    <>
      <MDBBtn
        size="sm"
        flat
        onClick={() => {
          navigate("products")
        }}
      >
        <h4 className="white-text">{title}</h4>
      </MDBBtn>
      <div ref={scrollBar} className="scrollList my-4">
        {data &&
          data.map((item, index) => (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              src={item.images[0]}
              price={item.price}
            />
          ))}
      </div>
    </>
  )
}

export default ItemList
