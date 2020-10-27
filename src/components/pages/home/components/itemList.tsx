import React, { useEffect, useRef } from "react"
import Item from "./item"
import "./style.sass"

interface props {
  title: string
  data?: [any]
}

const Data = [
  { name: "Cat", src: "https://dummyimage.com/300", price: 1000 },
  { name: "Cat", src: "https://dummyimage.com/300", price: 1000 },
  { name: "Cat", src: "https://dummyimage.com/300", price: 1000 },
  { name: "Cat", src: "https://dummyimage.com/300", price: 1000 },
  { name: "Cat", src: "https://dummyimage.com/300", price: 1000 },
]

const ItemList = (props: props) => {
  const { title } = props
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
      <h4>{title}</h4>
      <div ref={scrollBar} className="scrollList my-4">
        {Data.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            src={item.src}
            price={item.price}
          />
        ))}
      </div>
    </>
  )
}

export default ItemList
