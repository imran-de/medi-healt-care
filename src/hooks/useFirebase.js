import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/initialAuthentication";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";

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
    //LogOut user
    const logOut = () => {
        signOut(auth).then(() => setUser({})).catch(error => {
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
        logOut
    }
}

export default useFirebase;