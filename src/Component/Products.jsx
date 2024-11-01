import React from 'react'
import product from "../images/cards.webp"
import "./Product.css"
import { IoIosHeartEmpty } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";



const ProductItems = [
    {
        id: 1,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: product,
    },
    {
        id: 2,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: product
    },
    {
        id: 3,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: product
    },
    {
        id: 4,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: product

    },
]
function Products() {
    return (
        <>
            <div className='main-section'>
                <div className='cards-heading'>
                    <h1>Mobile Phones</h1>
                    <span>View more <RiArrowRightSLine style={{ fontSize: "22px" }} />
                    </span>
                </div>
                <div className='mobile-phones'>
                    <div className='all-card'>

                        <div className='main-cards'>
                            {
                                ProductItems.map(newProduct => (
                                    <div className='cards' key={newProduct.id}>
                                        <img src={newProduct.image} alt="" />
                                        <div className='card-sec'>
                                            <div className='rate'>
                                                <p>{newProduct.price}</p>
                                                <IoIosHeartEmpty style={{ fontSize: "24px" }} />
                                            </div>
                                            <div className='product-details'>
                                                <p>{newProduct.name}</p>
                                                <span>{newProduct.address}</span>
                                                <span>{newProduct.days}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>



            <div className='main-section'>
                <div className='cards-heading'>
                    <h1>Cars</h1>
                    <span>View more <RiArrowRightSLine style={{ fontSize: "22px" }} />
                    </span>
                </div>
                <div className='mobile-phones'>
                    <div className='all-card'>

                        <div className='main-cards'>
                            {
                                ProductItems.map(newProduct => (
                                    <div className='cards' key={newProduct.id}>
                                        <img src={newProduct.image} alt="" />
                                        <div className='card-sec'>
                                            <div className='rate'>
                                                <p>{newProduct.price}</p>
                                                <IoIosHeartEmpty style={{ fontSize: "24px" }} />
                                            </div>
                                            <div className='product-details'>
                                                <p>{newProduct.name}</p>
                                                <span>{newProduct.address}</span>
                                                <span>{newProduct.days}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>
            <div className='main-section'>
                <div className='cards-heading'>
                    <h1>Bikes & Motorcycles</h1>
                    <span>View more <RiArrowRightSLine style={{ fontSize: "22px" }} />
                    </span>
                </div>
                <div className='mobile-phones'>
                    <div className='all-card'>

                        <div className='main-cards'>
                            {
                                ProductItems.map(newProduct => (
                                    <div className='cards' key={newProduct.id}>
                                        <img src={newProduct.image} alt="" />
                                        <div className='card-sec'>
                                            <div className='rate'>
                                                <p>{newProduct.price}</p>
                                                <IoIosHeartEmpty style={{ fontSize: "24px" }} />
                                            </div>
                                            <div className='product-details'>
                                                <p>{newProduct.name}</p>
                                                <span>{newProduct.address}</span>
                                                <span>{newProduct.days}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
