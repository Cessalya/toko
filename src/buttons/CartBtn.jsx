import React from "react"
import { Link } from "react-router-dom"

const CartBtn = () => {
    return(
        <>
        <Link className="btn bt-outline-primary">
            <span className="fa fa-shopping-cart me-1"></span> Cart()
        </Link>
        </>
    )
}
export default CartBtn