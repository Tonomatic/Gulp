import { NavLink, useParams } from 'react-router-dom';
import "./Creator.css"

function Creator() {
    return (
        <div>
            <h2>
                Developer: Jose Solis
                <div className="links">
                    <a href={'https://github.com/Tonomatic/hello-world'}>GitHub Repository</a>
                    <a href={'https://www.linkedin.com/in/jose-solis-17940b71/'}>LinkedIn</a>
                </div>
            </h2>
        </div>
    )
}

export default Creator;
