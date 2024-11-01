import React from 'react'
import Logo from "../images/olx-logo.png"
import Car from "../images/car.svg"
import Property from "../images/property.svg"
import Downarrow from "../images/down-arrow.svg"
import Searchbar from "../images/search-icon.svg"
import { FaPlus } from "react-icons/fa6";

import "./Navbar.css"

function Navbar() {
    return (
        <>
            <section className='header'>
                <div className='main-section'>
                    <div className='olx-content'>
                        <div className='olx-logo'>
                            <img src={Logo} />
                        </div>
                        <div className='content'>
                            <div className='content-image'>
                                <img src={Car} />
                            </div>
                            <span>Motors</span>
                        </div>
                        <div className='content'>
                            <div className='content-image'>
                                <img src={Property} />
                            </div>
                            <span>Property</span>
                        </div>
                    </div>
                    <div className='search'>
                        <div className='search-content'>
                            <div className='dropdown-sec'>
                                <input type="text" value="pakistan" />
                                <img className='dropdown-arrow' src={Downarrow} />
                            </div>
                            <div className='search-sec'>
                                <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                                <img src={Searchbar} />
                            </div>

                            <div className='login-sec'>
                                <div className='login'>
                                    <a href="#">Login</a>
                                </div>
                                <div className='sell'>
                                    <span><FaPlus />SELL</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
