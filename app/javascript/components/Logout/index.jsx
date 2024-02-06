import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../redux/Auth/AuthSlicer'


function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState('');

    function handleLogout (){
        dispatch(logout())
        // Dispatch the logout actions
        .then(()=> {
            setLogoutMessage('You have been logged out');
        // Navigate to the home page after successs logout
            navigate('/');
        })
        .catch((err)=> {
            setLogoutMessage('Something went wrong please try again', err)
        });
    };

    return (
        <div className= "logout-container">
            <button onClick={handleLogout} className="logout-button">Logout</button>
            {logoutMessage && <p className="logout-message">{logoutMessage}</p>}
        </div>
    )
}

export default Logout;