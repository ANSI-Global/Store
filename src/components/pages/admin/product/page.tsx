import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact"
import AdditionalCard from "./cards/additionalCard"
import DescriptionCard from "./cards/descriptionCard"
import ImageCard from "./cards/imageCard"
import InventoryCard from "./cards/inventoryCard"
import UpdateCard from "./cards/updateCard"
import Table from "./variantTable"

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
