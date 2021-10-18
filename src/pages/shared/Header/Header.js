import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link> </li>
                <li>{
                    !user.displayName ? <Link to="/login">Login</Link> :
                        <Link to="/" onClick={logOut}>LogOut</Link>
                } </li>
                <li><Link to="/registration">Registration</Link> </li>
                {user.displayName ? <li>{user?.displayName}</li> : ''}

            </ul>
        </div>
    );
};

export default Header;