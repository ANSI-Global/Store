import { MDBBtn, MDBIcon } from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchBar } from "../../../../state/globalReducer"
import "./components/styles.sass"

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
    <form className="search-bar">
      <div className="nav-left">
        <div className="select--facade">
          <span>All</span> <MDBIcon icon="caret-down" />
        </div>

        <select name="All" className="search-bar__select">
          {departments.map((department, index) => (
            <option key={index}>{department}</option>
          ))}
        </select>
      </div>
      <input
        className="form-control form-control-sm ml-3 w-75 search-bar__input"
        type="text"
        value={searchBar}
        onChange={({ currentTarget }) =>
          dispatch(updateSearchBar(currentTarget.value))
        }
      />
      <MDBBtn color="amber" className="search-bar__submit">
        <MDBIcon icon="search" css={{ color: "black" }} />
      </MDBBtn>
    </form>
  )
}

export default SearchBar
