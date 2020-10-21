import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSwitch,
} from "mdbreact"
import React from "react"

interface props {
  price: string
  setPrice: Function
  quantity: string
  setQuantity: Function
  warehouse: string
  setWarehouse: Function
  enabled: boolean
  setEnabled: Function
}

const ProductTemplate = (props: props) => {
  const {
    price,
    setPrice,
    quantity,
    setQuantity,
    warehouse,
    setWarehouse,
    enabled,
    setEnabled,
  } = props

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Inventory</MDBCardTitle>
            <MDBCardBody>
              <MDBRow>
                <MDBCol>
                  Pricing
                  <br /> Price:
                  <MDBInput
                    label="Price"
                    value={price}
                    onChange={({ currentTarget }) =>
                      setPrice(currentTarget.value)
                    }
                  />
                </MDBCol>
                <MDBCol>
                  Inventory
                  <br /> Stock:
                  <MDBInput
                    label="Stock"
                    value={quantity}
                    onChange={({ currentTarget }) =>
                      setQuantity(currentTarget.value)
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  Werehouse
                  <br /> Stock:
                  <MDBInput
                    label="Warehouse"
                    value={warehouse}
                    onChange={({ currentTarget }) =>
                      setWarehouse(currentTarget.value)
                    }
                  />
                </MDBCol>
              </MDBRow>
              Enabled{" "}
              <MDBSwitch
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
