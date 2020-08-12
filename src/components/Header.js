import React from 'react'; 
import { Link } from 'react-router-dom';

function Header() {
   

    return (
        // NB: I will still change this to a Navigation Bar
        <header style={headerStyle}>
            <h1>Full Wallet 1.0</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/balance_sheet">Balance Sheet</Link> | <Link style={linkStyle} to="/loan">Mortage Loan</Link>
        </header>
    )   
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    margin: '-8px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


export default Header;