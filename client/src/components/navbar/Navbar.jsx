import Logo from '../../components/logo/Logo'
import SearchBar from './SearchBar';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/home');
    };
    return (
        <div className="navbar-container">
            <button className='navbar-logo' onClick={handleButtonClick}><Logo /><p className='navbar-p'>RB</p></button>
            <button className='navbar-btn'>Create Videogame</button>

            <SearchBar />
        </div>
    )
}

export default Navbar