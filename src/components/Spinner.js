import React from 'react';
import '../others/spinner.css'

// I can also declare the functional component as an Arrow function
const Spinner = () => {
    return( 
        <div className="spinner">
            <div className="firstDot"></div>
            <div className="secondDot"></div>
        </div>
    );
}


export default Spinner;