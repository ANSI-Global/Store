import { MDBAnimation, MDBBtn, MDBIcon } from "mdbreact"
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
    <form className="nav-search">
      <div className="nav-left">
        <div className="nav-search-facade">
          <MDBBtn color="light" className="nav-btn nav-left">
            All
            <MDBIcon icon="caret-down" />
          </MDBBtn>
        </div>

        <select name="All" className="nav-search-dropdown">
          {departments.map((department, index) => (
            <option key={index}>{department}</option>
          ))}
        </select>
      </div>
      <input
        className="nav-fill"
        type="text"
        value={searchBar}
        onChange={({ currentTarget }) =>
          dispatch(updateSearchBar(currentTarget.value))
        }
      />
      <MDBBtn color="amber" className="nav-btn nav-right">
        <MDBAnimation type="pulse" infinite>
          <MDBIcon icon="search" size="lg" css={{ color: "black" }} />
        </MDBAnimation>
      </MDBBtn>
    </form>
  )
}

export default SearchBar
