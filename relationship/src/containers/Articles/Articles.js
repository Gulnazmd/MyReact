import React, {Component} from 'react';
import './Articles.css';
import { Route, Link } from 'react-router-dom';
import Article from '../../components/Article/Article';
import Main from '../../components/Main/Main';
import About from '../../components/About/About';

class Articles extends Component {

    
    state ={
        loading: false,
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/" exact>Home</Link></li>
                            <li><Link to="/article/" exact>Article by Sister Azeem Unnisa</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Main} />
                <Route path="/article" component={Article} />
                <Route path="/about" component={About} />

            </div>
        );
    }
}

export default Articles;