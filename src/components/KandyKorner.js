import React from "react"
import "./locations/Location.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./KandyKorner.css"
import "./products/Product.css"
import ProductList from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"



export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Sweets until you ain't got teeth.</small>
        
        <h2>Locations</h2>
        <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        </article>
        <h2>Products</h2>
        <article className="products">
        <ProductProvider>
            <ProductList />
        </ProductProvider>
        </article>
    </>
)