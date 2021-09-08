import React from 'react';
import Aux from '../../hoc/_Aux'
import './Layout.css';
import { Link } from 'react-router-dom';


const Layout = ( props ) => (
    <Aux>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Create new Card</Link></li>
                        <li><Link to="/create-card">My Card</Link></li>
                    </ul>
                </nav>
            </header>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;