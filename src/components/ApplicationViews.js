import React from "react"
import { Route } from "react-router-dom"
import {ProductProvider} from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import {LocationProvider} from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"

export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                {/* Render the animal list when http://localhost:3000/products */}
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
            
        </>
    )
}