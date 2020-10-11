import { graphql } from "gatsby"
import React from "react"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    fauna {
      allProducts {
        data {
          _id
          title
          description
        }
      }
    }
  }
`

export default ComponentName
