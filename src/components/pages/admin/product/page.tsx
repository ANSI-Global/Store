import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact"
import AdditionalCard from "./components/cards/additionalCard"
import DescriptionCard from "./components/cards/descriptionCard"
import ImageCard from "./components/cards/imageCard"
import InventoryCard from "./components/cards/inventoryCard"
import UpdateCard from "./components/cards/updateCard"
import Table from "./components/variantTable"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = () => (
  <MDBContainer>
    <MDBRow>
      <MDBCol>
        <DescriptionCard />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <InventoryCard />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <MDBCard className="p-2 m-4">
          <MDBCardTitle className="text-center my-2">Variants</MDBCardTitle>
          <MDBCardBody>
            <Table />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <AdditionalCard />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <ImageCard />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
        <UpdateCard />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default ProductTemplate
