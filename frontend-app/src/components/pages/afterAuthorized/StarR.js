import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "../Page.css";

const StarR = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return ( 
        <div>
            {[...Array(1)].map((star,i)=>{
                const ratingValue= i+1;

                return (
                    <label>
                        <input 
                            type="radio" 
                            className="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}  
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue<= (hover || rating) ? "#ffc107":"#e4e5e9"} 
                            size={40} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}    
        </div>
    );
};

export default StarR