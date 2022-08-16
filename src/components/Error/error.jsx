
import React from "react";
import { Link } from 'react-router-dom';
import './error.css';


function Error() {
    return (
        <div>
            <div>
                ERROR PAGE NOT FOUND
               
                <p class="bajar"><Link to="/">Home</Link></p>
            </div>


        </div>

    )
}


export default Error;