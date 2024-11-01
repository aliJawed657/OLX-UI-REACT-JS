import React from 'react';
import mobile from '../images/categories.png';
import "./AllCategories.css";

const categories = [
    { id: 1, name: "Mobiles", image: mobile },
    { id: 2, name: "Cars", image: mobile },
    { id: 3, name: "Motorcycles", image: mobile },
    { id: 4, name: "Houses", image: mobile },
    { id: 5, name: "Video-Audios", image: mobile },
    { id: 6, name: "Tablets", image: mobile },
    { id: 7, name: "Tablets", image: mobile },
    { id: 8, name: "Tablets", image: mobile },
    { id: 9, name: "Tablets", image: mobile },
    { id: 10, name: "Tablets", image: mobile },
    { id: 11, name: "Tablets", image: mobile },
    { id: 12, name: "Tablets", image: mobile },
    { id: 13, name: "Tablets", image: mobile },
    { id: 14, name: "Tablets", image: mobile },
];

function AllCategories() {
    return (
        <div className='all-category'>
            <div className='category-sec'>
                <div className='categories'>
                    <h1>All Categories</h1>
                    <div className='mid-section'>
                        {categories.map(category => (
                            <div className='categories-content' key={category.id}>
                                <img src={category.image} alt={category.name} />
                                <span>{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCategories;
