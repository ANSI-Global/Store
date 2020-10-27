import React from "react"
import Item from "./item"

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

  async function autoScroll(element: HTMLDivElement) {
    if (element.scrollBy) {
      self.setInterval(() => {
        if (element.scrollLeft !== element.scrollWidth) {
          element.scrollBy(1, 0)
        }
      }, 12)
    }
  }

  return (
    <>
      <h4>{title}</h4>
      <div
        style={{ display: "flex", overflowY: "scroll" }}
        ref={element => autoScroll(element)}
      >
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
