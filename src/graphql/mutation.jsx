import { gql } from "@apollo/client";

export const addToCart = gql`
mutation MyMutation($id: uuid!, $total: Int!) {
    insert_bag(objects: {id: $id, total: $total}) {
      returning {
        id
        quantity
        total
        bag_product {
          image
          name
          price
          type
        }
      }
    }
  }
`

export const editBag = gql`
    mutation MyMutation($id: uuid!, $bag: bag_set_input = {}) {
        update_bag_by_pk(pk_columns: {id: $id}, _set: $bag) {
            id
            quantity
            total
        }
    }
  
`

export const deleteCart = gql`
    mutation MyMutation($id: uuid!) {
        delete_bag(where: {id: {_eq: $id}}) {
        returning {
            id
            bag_product {
            name
            }
        }
        }
    }
`

export const deleteAllBag = gql`
    mutation MyMutation2 {
        delete_bag(where: {}) {
        affected_rows
        }
    }  
`
export const addCustomer = gql`
    mutation MyMutation($object: customer_insert_input = {}) {
        insert_customer_one(object: $object) {
        additionalAddress
        address
        card
        city
        cvv
        email
        zipCode
        province
        phone
        name
        id
        expDate
        }
    }
`

export const editCustomer2 = gql`
    mutation MyMutation($id: String!, $_set: customer_set_input = {}) {
        update_customer_by_pk(pk_columns: {id: $id}, _set: $_set) {
            name
            email
            id
        }
    }
`
export const editCustomer = gql`
mutation MyMutation($id: String = "", $additionalAddress: String = "", $address: String = "", $card: String = "", $city: String = "", $cvv: String = "", $email: String = "", $expDate: String = "", $name: String = "", $phone: String = "", $province: String = "", $zipCode: String = "") {
    update_customer_by_pk(pk_columns: {id: $id}, _set: {additionalAddress: $additionalAddress, address: $address, card: $card, city: $city, cvv: $cvv, email: $email, expDate: $expDate, name: $name, phone: $phone, province: $province, zipCode: $zipCode}) {
      address
      card
      city
      id
      name
      cvv
      email
      expDate
      phone
      province
      zipCode
      additionalAddress
    }
  }
  
`

export const editCustomerProduct= gql`
    mutation MyMutation($id: String = "", $nameBag: String = "", $quantityBag: String = "", $total: String = "") {
        update_customer(where: {id: {_eq: $id}}, _set: {nameBag: $nameBag, quantityBag: $quantityBag, total: $total}) {
        returning {
            nameBag
            id
            name
            quantityBag
        }
        }
    }
`

export const deleteCustomer = gql`
    mutation MyMutation($id: String!) {
        delete_customer(where: {id: {_eq: $id}}) {
            returning {
                id
                name
                email
            }
        }
    }
`