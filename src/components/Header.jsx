import React from "react"
import { Link } from "react-router-dom"
import Login from "../buttons/Login"
import Signup from "../buttons/Signup"
import CartBtn from "../buttons/CartBtn"

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid py-2">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" class="nav-item">
                                <button class="nav-link" aria-current="page">Home</button>
                            </Link>

                            <Link to="/products" class="nav-item">                       
                                <button class="nav-link" aria-current="page">Product</button>                   
                            </Link>

                            <Link to="/about" class="nav-item">
                                <button class="nav-link" aria-current="page">About</button>  
                            </Link>

                            <Link to="/contact" class="nav-item">
                                <button class="nav-link" aria-current="page">Contact</button>
                            </Link>


                            {/* <li class="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                            </li> */}
                        </ul>

                        <Link to="/atk" class="nav-item">
                                <button className="navbar-brand mx-auto fw-bold" aria-current="page">Link</button>
                        </Link>

                        {/* <Link className="navbar-brand mx-auto fw-bold" to="/">ATK</Link> */}


                        <Signup/>
                        <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header