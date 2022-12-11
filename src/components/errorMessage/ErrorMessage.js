import img from './error.gif';
import './errorMessage.scss';

let ErrorMessage = () => {
    return (
        <img className='error__img' src={img} alt="Error"/>
    )
}

export default ErrorMessage;