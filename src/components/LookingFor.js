import * as React from 'react';

import "../style/lookingFor.css"



function LookingFor(){
    return (
        <div className='looking'>
            <h2>WHAT ARE YOU LOOKING FOR?</h2>
            <div className='looking_box'>
                <div className='lookingForRent rent_and_buy_box'>
                    <h1>RENT</h1>
                </div>
                <div className='lookingForBuy rent_and_buy_box'>
                <h1>BUY</h1>
                </div>
            </div>
            
        </div>
    )
}


export default LookingFor