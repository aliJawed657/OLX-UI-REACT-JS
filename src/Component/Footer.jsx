import React from 'react'
import "./Footer.css"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import youtube from "../images/youtube.svg"
import instagram from "../images/insta.svg"
import googlePlay from "../images/google-play.svg"
import appStore from "../images/app-store.svg"
import appGallery from "../images/app-gallery.svg"

function Footer() {
    return (
        <>
            <div className='main-footer'>
                <div className='footer'>

                    <div className='footer-sec'>
                        <div className='footer-head'>
                            <p>POPULAR CATEGORIES</p>
                        </div>
                        <ul>
                            <li>Cars</li>
                            <li>Flats for rent</li>
                            <li>Mobile Phones</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                    <div className='footer-sec'>
                        <div className='footer-head'>
                            <p>TRENDING SEARCHES</p>
                        </div>
                        <ul>
                            <li>Bikes</li>
                            <li>Watches</li>
                            <li>Books</li>
                            <li>Dogs</li>
                        </ul>
                    </div>


                    <div className='footer-sec'>
                        <div className='footer-head'>
                            <p>ABOUT US</p>
                        </div>
                        <ul>
                            <li>About Dubizzle Group</li>
                            <li>OLX Blog</li>
                            <li>Contact Us</li>
                            <li>OLX for Businesses</li>
                        </ul>
                    </div>
                    <div className='footer-sec'>
                        <div className='footer-head'>
                            <p>OLX</p>
                        </div>
                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className='footer-images'>
                        <span>FOLLOW US</span>
                        <div className='footer-icons'>
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                            <img src={youtube} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                        <div className='footer-group'>
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                            <img src={appGallery} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-end'>
                <div className='footer-para'>
                    <span>Free Classifieds in Pakistan</span>
                    <span style={{ fontWeight: "400" }}>. © 2006-2024 OLX</span>
                </div>
            </div>
        </>
    )
}

export default Footer
