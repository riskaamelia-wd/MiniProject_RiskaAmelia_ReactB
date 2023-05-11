import { gql } from "@apollo/client"

export const GetProductList = gql`
        query GetProduct {
            product {
            id
            image
            category
            name
            price
            type
            }
        }
    `

export const GetProductByCategory = gql`
        query GetProduct($category: String = "Bracelet") {
            product(where: {category: {_regex: $category}}) {
            id
            image
            category
            name
            price
            type
            }
        }
    `

export const getProductById = gql`
    query MyQuery($id: uuid!) {
        product(where: {id: {_eq: $id}}) {
            id
            image
            category
            name
            price
            type
        }
    }
`

export const getCart = gql`
    query MyQuery {
        bag {
        id
        bag_product {
            name
            price
            image
            type
        }
        quantity
        total
        }
    }
`

export const getCartById = gql`
    query MyQuery($id: uuid!) {
        bag_by_pk(id: $id) {
        total
        quantity
        bag_product {
            name
            price
        }
        }
    }
`

export const getCustomer= gql`
    query MyQuery {
        customer {
        additionalAddress
        address
        card
        city
        cvv
        email
        expDate
        id
        name
        phone
        province
        zipCode
        }
    }
`


export const getCustomerById= gql`
    query MyQuery($id: String!) {
        customer(where: {id: {_eq: $id}}) {
        additionalAddress
        address
        card
        city
        cvv
        email
        expDate
        id
        name
        phone
        province
        zipCode
        }
    }  
`