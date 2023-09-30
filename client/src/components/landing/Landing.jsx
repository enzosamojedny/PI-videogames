import { NavLink } from 'react-router-dom'
import './landing.css'
function Landing() {
    return (
        <div className="landing-container">
            <div className='container'>
                <h1 className='landing-h1'>Browse games faster than ever</h1>
                <h2 className='landing-h2'>Take control of Orb Interactive powerful engine to render every videogame you can wish</h2>
                <NavLink to={'/home'}><button className='landing-button'>Join us</button></NavLink>
            </div>
        </div>
    )
}

export default Landing