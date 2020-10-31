import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSwitch
} from "mdbreact"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setEnabled,
  setPrice,
  setQuantity,
  setWarehouse
} from "../../productReducer"

interface state {
  adminProduct: {
    price: string
    warehouse: string
    quantity: string
    enabled: boolean
  }
}

const ProductTemplate = () => {
  const { price, quantity, warehouse, enabled } = useSelector(
    (state: state) => state.adminProduct
  )

  const dispatch = useDispatch()

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
                      dispatch(setPrice(currentTarget.value))
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
                      dispatch(setQuantity(currentTarget.value))
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
                      dispatch(setWarehouse(currentTarget.value))
                    }
                  />
                </MDBCol>
              </MDBRow>
              Enabled{" "}
              <MDBSwitch
                checked={enabled}
                onChange={() => dispatch(setEnabled(!enabled))}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
