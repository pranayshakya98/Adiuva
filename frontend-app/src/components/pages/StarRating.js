import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
<<<<<<< HEAD
=======
import "./Page.css";
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return ( 
        <div>
            {[...Array(5)].map((star,i)=>{
                const ratingValue= i+1;
<<<<<<< HEAD

=======
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
                return (
                    <label>
                        <input 
                            type="radio" 
<<<<<<< HEAD
                            name="rating" 
=======
                            className="rating" 
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
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

<<<<<<< HEAD
export default StarRating
=======
export default StarRating;
>>>>>>> 485595af7b89ecdc0fc57b5322cfb8d27ca340dd
