import * as React from 'react';

import "../style/search.css"
import { Radio } from '@mui/material';

function SearchProperty(){
    return (
        <div className='search'>
            <h2>Search Property Near You</h2>
            <div className='radio'>
                <span>To :{" "}</span>
                <input type='checkbox' value={"rent"} checked={true}/> Buy
                <input type='checkbox' value={"rent"} checked={true}/> Rent
            
            </div>
            <div className='searchBox'>
                
                <select className='search_left'>
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>NCR</option>
                </select>
                <select>
                    <option>Select City</option>
                    <option>New Delhi</option>
                    <option>East Delhi</option>
                </select>
                <select className='search_right'>
                    <option>Plot/Flat</option>
                    <option>Plot</option>
                    <option>Flat</option>
                </select>
                
            </div>
            <button className='search_right'>Search</button>
             
        </div>
    )
}

export default SearchProperty