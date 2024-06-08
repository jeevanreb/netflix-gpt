import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, [])
    return (

        <div
            className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-4"
        >
            <img
                className="w-36" alt="netlix"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>

            {user && (
                <div className="flex">
                    <img src={user?.photoURL} alt="" className="w-8 h-8 mt-3"></img>
                    <button className="text-white" onClick={handleSignOut}>(sign out)</button>
                </div>
            )}
        </div>

    );
}
export default Header;