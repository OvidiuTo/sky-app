import React from 'react';
import {Link} from 'react-router-dom';
import './page.scss';

const MainPage = () =>{
    return(
        <div className="btn-group">
            <ul>
            <li><Link to="/map"><button>Reveal the Map</button></Link></li>
            <li><Link to="/items"><button>Items</button></Link></li>
            <li><Link to="/characters"><button>Characters</button></Link></li>
            <li><Link to="/lore"><button>Lore</button></Link></li>
            <li><Link to="/skilltree"><button>Skill Tree</button></Link></li>
            </ul>
            <h3>Welcome summoner</h3>
            <small>Main Page</small>
        </div>
    );
}

export default MainPage;