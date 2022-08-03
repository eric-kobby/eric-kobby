import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';

const Logo: React.FC = () => {
    return (
        <div className='logo-container'>
            <img src={LogoS} className='solid-logo' alt='S'/>
            <img />
        </div>
    )
}

export default Logo;