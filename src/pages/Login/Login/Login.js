import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Login = () => {
    const { user, signInWithGoogle, msg } = useAuth();
    return (
        <div>
            <Header></Header>
            <h2>{msg}</h2>
            <button onClick={signInWithGoogle}>SignIn with Google</button>
            {user?.displayName}
            <Footer></Footer>
        </div>
    );
};

export default Login;