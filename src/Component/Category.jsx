import React, { useState } from 'react';
import Slider from 'react-slick';
import './Category.css';
import Downarrow from '../images/down-arrow.svg';
import Slide from "../images/slide.png"
function Category() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return (
        <>
            <div className='container'>
                <div className='category'>
                    <div className='category-content' onClick={handleClick}>
                        <p className={isOpen ? 'active' : ''}>ALL CATEGORIES</p>
                        <img className='dropdown-arrow' src={Downarrow} alt="Down arrow" />
                    </div>
                    <ul>
                        <li><a href="#">Mobile Phones</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Motorcycles</a></li>
                        <li><a href="#">Houses</a></li>
                        <li><a href="#">Video-Audios</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Land & Plots</a></li>
                    </ul>

                </div>
            </div>
            <div className='slider'>
                <Slider {...settings}>
                    <img src={Slide} />
                    <img src={Slide} />
                    <img src={Slide} />
                </Slider>
            </div>
        </>
    )
}



export default Category;