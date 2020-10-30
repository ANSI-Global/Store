import React, { FC } from "react"
import Card from "../home/components/item"
import "./style.sass"

const List: FC = () => {
  return (
    <>
      <section className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default List
