import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constant";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        //unsubscribe when component unmounts
        return () => unsubscribe();
    }, [])
    return (

        <div
            className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-4"
        >
            <img
                className="w-36" alt="netlix"
                src={Logo}></img>

            {user && (
                <div className="flex">
                    <img src={user?.photoURL} alt="" className="w-6 h-6 mt-3"></img>
                    <button className="text-white" onClick={handleSignOut}>(sign out)</button>
                </div>
            )}
        </div>

    );
}
export default Header;