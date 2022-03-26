import reactLogo from '../../assets/react.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='logo-container'>
            <img src={reactLogo} alt="react-logo" className='react-logo'/>
        </div>
    )
}

export default Header;