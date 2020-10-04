import React from "react"
import { PayPalButton } from "react-paypal-button-v2"

const Paypal = ({ price }: { price: number }) => (
  <PayPalButton
    amount={price}
    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
    onSuccess={(details: { payer }, data: { orderID }) => {
      alert("Transaction completed by " + details.payer.name.given_name)

      // OPTIONAL: Call your server to save the transaction
      return fetch("/paypal-transaction-complete", {
        method: "post",
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      })
    }}
    onError={() => <p>Sorry there was an error!</p>}
  />
)

export default Paypal
