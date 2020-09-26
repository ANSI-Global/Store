import { MDBDataTable } from "mdbreact"
import React, { useState } from "react"
import Dummy from "./components/dummyList"

export default function WithMultipleCheckboxes() {
  const [datatable, setDatatable] = useState(Dummy)
  const [checkbox1, setCheckbox1] = useState([])

  const showLogs2 = e => {
    setCheckbox1(e)
  }

  return (
    <>
      <MDBDataTable
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID="id6"
        bodyCheckboxID="checkboxes6"
        getValueCheckBox={e => {
          showLogs2(e)
        }}
        getValueAllCheckBoxes={e => {
          showLogs2(e)
        }}
        multipleCheckboxes
      />

      <p>
        {" "}
        {checkbox1 && (
          <p>
            {JSON.stringify(
              checkbox1.map(e => {
                console.log(e)
                delete e.checkbox
                return e
              }) && checkbox1
            )}
          </p>
        )}
      </p>
    </>
  )
}
