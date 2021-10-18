import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/initialAuthentication";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

//initialize firebase authentication
initialAuthentication()
const auth = getAuth();
// handle all firebase login logout function
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [msg, setMsg] = useState('')


    //Login user with google account
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }


    // using email and password create new user
    const makeUserWithEmailAndPassword = ({ email, pass1, fullName }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass1)
            .then(result => {
                setName();
                setUser(result.user)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))

        // after create user update user name
        const setName = () => updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: "https://casperkruger.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png"
        }).then(() => {
            //profile update done
            setMsg("User Created successFully, Now you can login!!!")
        }).catch(error => setMsg(error.message));
    }


    //Login with email and password
    const logInWithEmailAndPassword = ({ email, pass }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user)
                setMsg("LogIn Success!!!")
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }

    //LogOut user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            setMsg('')
        }).catch(error => {
            setMsg(error.message)
        })
    }

    //collect data from current login user
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
        })
    }, [])

    return {
        user,
        isLoading,
        msg,
        signInWithGoogle,
        makeUserWithEmailAndPassword,
        logInWithEmailAndPassword,
        logOut
    }
}

export default useFirebase;