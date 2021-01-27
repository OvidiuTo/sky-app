import React from 'react';
import {Link} from 'react-router-dom'

const MainPage = () =>{
    return(
        <div>
            <h3>Welcome summoner</h3>
            <small>Main Page</small>
            <Link to="/map">
                <button className="btn-group">Reveal the Map</button>
            </Link>
        </div>
    );
}

export default MainPage;