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
              <option value="search-alias=stripbooks-intl-ship">Books</option>
              <option value="search-alias=computers-intl-ship">
                Computers
              </option>
              <option value="search-alias=digital-music">Digital Music</option>
              <option value="search-alias=electronics-intl-ship">
                Electronics
              </option>
              <option value="search-alias=digital-text">Kindle Store</option>
              <option value="search-alias=instant-video">Prime Video</option>
              <option value="search-alias=fashion-womens-intl-ship">
                Women's Fashion
              </option>
              <option value="search-alias=fashion-mens-intl-ship">
                Men's Fashion
              </option>
              <option value="search-alias=fashion-girls-intl-ship">
                Girls' Fashion
              </option>
              <option value="search-alias=fashion-boys-intl-ship">
                Boys' Fashion
              </option>
              <option value="search-alias=deals-intl-ship">Deals</option>
              <option value="search-alias=hpc-intl-ship">
                Health &amp; Household
              </option>
              <option value="search-alias=kitchen-intl-ship">
                Home &amp; Kitchen
              </option>
              <option value="search-alias=industrial-intl-ship">
                Industrial &amp; Scientific
              </option>
              <option value="search-alias=luggage-intl-ship">Luggage</option>
              <option value="search-alias=movies-tv-intl-ship">
                Movies &amp; TV
              </option>
              <option value="search-alias=music-intl-ship">
                Music, CDs &amp; Vinyl
              </option>
              <option value="search-alias=pets-intl-ship">Pet Supplies</option>
              <option value="search-alias=software-intl-ship">Software</option>
              <option value="search-alias=sporting-intl-ship">
                Sports &amp; Outdoors
              </option>
              <option value="search-alias=tools-intl-ship">
                Tools &amp; Home Improvement
              </option>
              <option value="search-alias=toys-and-games-intl-ship">
                Toys &amp; Games
              </option>
              <option value="search-alias=videogames-intl-ship">
                Video Games
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
