import {
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
} from "mdbreact"
import React, { useState } from "react"

const CollapsePage = () => {
  const [collapseID, setCollapseID] = useState("collapse3")

  const toggleCollapse = collapseID => () => setCollapseID(collapseID)

  return (
    <MDBContainer>
      <MDBContainer className="mt-5">
        <MDBCard className="mt-3">
          <MDBCollapseHeader onClick={toggleCollapse("collapse1")}>
            Collapsible Group Item #1
            <i
              className={
                collapseID === "collapse1"
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
              skateboard dolor brunch. Food truck quinoa nesciunt laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
              squid single-origin coffee nulla assumenda shoreditch et. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBCollapseHeader onClick={toggleCollapse("collapse2")}>
            Collapsible Group Item #2
            <i
              className={
                collapseID === "collapse2"
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBCollapseHeader onClick={toggleCollapse("collapse3")}>
            Collapsible Group Item #3
            <i
              className={
                collapseID === "collapse3"
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  )
}

export default CollapsePage
