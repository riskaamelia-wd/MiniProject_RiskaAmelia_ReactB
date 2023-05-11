import { useQuery } from "@apollo/client";
import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'
import { getCustomer } from "../../graphql/query";


export const CustomerSlice = createSlice({
    name : 'customer',
    initialState:[],
    reducers:{
        addCustomer : (state, actions) => {
            const customer = {
                id : uuid(),
                nama : actions.payload.produt.nama,
                phone : actions.payload.produt.phone,
                email : actions.payload.produt.email,
                address : actions.payload.produt.address,
                city : actions.payload.produt.city,
                province : actions.payload.produt.province,
                additionalAddress : actions.payload.produt.additionalAddress,
                zipCode : actions.payload.produt.zipCode,
                card : actions.payload.produt.card,
                expDate : actions.payload.produt.expDate,
                cvv : actions.payload.produt.cvv,
            }
            return[...state, customer]
        },
        editCustomer:(state,actions) => {
            const existing = state.find((customer) => customer.id === actions.payload.id)

            if(existing){
                existing.nama = actions.payload.customer.nama
                existing.phone = actions.payload.customer.phone
                existing.email = actions.payload.customer.email
                existing.address = actions.payload.customer.address
                existing.city = actions.payload.customer.city
                existing.province = actions.payload.customer.province
                existing.additionalAddress = actions.payload.customer.additionalAddress
                existing.zipCode = actions.payload.customer.zipCode
                existing.card = actions.payload.customer.card
                existing.expDate = actions.payload.customer.expDate
                existing.cvv = actions.payload.customer.cvv
            }
        },
        deleteCustomer:(state, action) => {
            return state.filter(customer => customer.id !== action.payload)
        }
    }
})

export const {addCustomer, deleteCustomer, editCustomer} = CustomerSlice.actions

export default CustomerSlice.reducer