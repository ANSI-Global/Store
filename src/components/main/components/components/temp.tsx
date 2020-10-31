import "./styles.sass"

const SearchBar = () => (
  <div id="nav-search">
    <div id="nav-bar-left"></div>
    <form
      accept-charset="utf-8"
      action="/s/ref=nb_sb_noss"
      className="nav-searchbar"
      method="GET"
      name="site-search"
      role="search"
    >
      <div className="nav-left">
        <div id="nav-search-dropdown-card">
          <div className="nav-search-scope nav-sprite">
            <div className="nav-search-facade" data-value="search-alias=aps">
              <span className="nav-search-label" style={{ width: "auto" }}>
                All
              </span>
              <i className="nav-icon"></i>
            </div>
            <span id="searchDropdownDescription" style={{ display: "none" }}>
              Select the department you want to search in
            </span>
            <select
              aria-describedby="searchDropdownDescription"
              className="nav-search-dropdown searchSelect"
              data-nav-digest="Xa0GQ+pPQ/tdsV+GmRWeXB8PUD0="
              data-nav-selected="0"
              id="searchDropdownBox"
              name="url"
              style={{ display: "block", top: "2.5px" }}
              tabIndex={0}
              title="Search in"
            >
              <option selected value="search-alias=aps">
                All Departments
              </option>
              <option value="search-alias=arts-crafts-intl-ship">
                Arts &amp; Crafts
              </option>
              <option value="search-alias=automotive-intl-ship">
                Automotive
              </option>
              <option value="search-alias=baby-products-intl-ship">Baby</option>
              <option value="search-alias=beauty-intl-ship">
                Beauty &amp; Personal Care
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="nav-fill">
        <div className="nav-search-field ">
          <input
            type="text"
            id="twotabsearchtextbox"
            value=""
            name="field-keywords"
            autoComplete="off"
            placeholder=""
            className="nav-input"
            dir="auto"
            tabIndex={0}
            aria-label="Search"
          />
        </div>
        <div id="nav-iss-attach"></div>
      </div>
      <div className="nav-right">
        <div className="nav-search-submit nav-sprite">
          <span
            id="nav-search-submit-text"
            className="nav-search-submit-text nav-sprite"
            aria-label="Go"
          >
            <input
              type="submit"
              className="nav-input"
              value="Go"
              tabIndex={0}
            />
          </span>
        </div>
      </div>
    </form>
  </div>
)

export default SearchBar
