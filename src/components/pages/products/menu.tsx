import { MDBIcon, MDBInput } from "mdbreact"
import React from "react"

const ProductListMenu = () => (
  <>
    <h6>Department</h6>
    <ul>
      <li>PC Accessories</li>
      <li>PlayStation 4 Games, Consoles & Accessories</li>
      <li>PlayStation 4 Headsets</li>
      <li>Xbox One Accessories</li>
      <li>Legacy Systems</li>
      <li>Mac Accessories</li>
      <li>Computer Audio & Video Accessories</li>
      <li>Nintendo Switch Accessories</li>
      <li>
        See All 25 Departments
        <MDBIcon icon="angle-down" />
      </li>
    </ul>

    <h6>Avg. Customer Review</h6>

    <ul>
      <li>4 Stars & Up & Up</li>
      <li>3 Stars & Up & Up</li>
      <li>2 Stars & Up & Up</li>
      <li>1 Star & Up & Up</li>
    </ul>

    <h6>Brand</h6>
    <ul>
      <li>NUBWO</li>
      <li>RUNMUS</li>
      <li>HyperX</li>
      <li>Mpow</li>
      <li>BENGOO</li>
      <li>Razer</li>
      <li>Beexcellent</li>
      <li>
        See more <MDBIcon icon="angle-down" />
      </li>
    </ul>

    <h6>Price</h6>
    <ul>
      <li>Under $10</li>
      <li>$10 to $15</li>
      <li>$15 to $25</li>
      <li>$25 to $35</li>
      <li>$35 & Above</li>
    </ul>

    <MDBInput label="Min $" />
    <MDBInput label="Max $" />

    <h6>PC Game Operating System</h6>
    <ul>
      <li>Windows 10</li>
      <li>Windows 8</li>
      <li>Windows 7</li>
      <li>Windows Vista</li>
      <li>Windows ME</li>
      <li>Windows 2000</li>
      <li>Windows 98</li>
    </ul>

    <h6>Condition</h6>
    <ul>
      <li>New</li>
      <li>Used</li>
    </ul>
  </>
)

export default ProductListMenu
