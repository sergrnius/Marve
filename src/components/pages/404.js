import ErrorMessage from '../errorMessage/ErrorMessage';
import {Link} from 'react-router-dom';

let Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bolt'}}>Page doesnt exist</p>
            <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bolt'}}>Return to home page</p>
            <Link to="/"/>
        </div>
    )
}

export default Page404;