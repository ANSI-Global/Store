export interface product {
  data: {
    name: string
    description?: string
    categoryID?: number
    images?: [string]
    price?: number
    warehouse?: number
    quantity?: number
    variants?: number[]
    reviews?: [any]
    questions?: [any]
    enabled?: boolean
  }
}
