import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <Header />
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "rgba(0,0,0,.8)", height: "350px" }}>
                <h2 className="text-light fw-bold">{user?.displayName} Dashboard</h2>
            </div>
            <div className="container my-5">
                {
                    user.uid && <div>
                        <img src={user?.photoURL} alt="" />
                        <h2>{user?.displayName}</h2>
                        <h5>{user?.email}</h5>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Profile;