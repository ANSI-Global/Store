import { MDBBtn, MDBIcon } from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchBar } from "../../../../state/globalReducer"
import "./style.sass"

interface state {
  cart: { items: [number] }
  global: { searchBar: string }
  products: { departments: [string] }
}

const SearchBar = () => {
  const { searchBar } = useSelector((state: state) => state.global)
  const { departments } = useSelector((state: state) => state.products)
  const dispatch = useDispatch()

  return (
    <form className="form-inline mw-200 nav-link" id="searchBar">
      <select name="All" id="searchSelect">
        {departments.map((department, index) => (
          <option key={index}>{department}</option>
        ))}
      </select>
      <input
        className="form-control form-control-sm ml-3 w-75 search-bar"
        type="text"
        value={searchBar}
        onChange={({ currentTarget }) =>
          dispatch(updateSearchBar(currentTarget.value))
        }
      />
      <MDBBtn color="amber" className="search-btn">
        <MDBIcon icon="search" css={{ color: "black" }} />
      </MDBBtn>
    </form>
  )
}

export default SearchBar
