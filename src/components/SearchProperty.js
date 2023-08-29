import * as React from 'react';

import "../style/search.css"
import { Radio } from '@mui/material';

function SearchProperty(){
    return (
        <div className='search'>
            <h2>Search Property Near You</h2>
            <div className='radio'>
                <span>To :{" "}</span>
                <input type='radio' value={"rent"}/> Buy
                <input type='radio' value={"rent"}/> Rent
            
            </div>
            <div className='searchBox'>
                <select>
                    <option>Delhi</option>
                    <option>NCR</option>
                </select>
                <select>
                    <option>New Delhi</option>
                    <option>East Delhi</option>
                </select>
                <select>
                    <option>Plot</option>
                    <option>Flat</option>
                </select>
                <button>Search</button>
            </div>
             
        </div>
    )
}

export default SearchProperty