import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

const handleLogOut = () => {
logOut()
.then(() => {})
.catch(error => console.log(error))
}

    return (
        <div>
            <NavLink className ="mr-[20px] " to="/">Home</NavLink>
            <NavLink className ="mr-[20px] " to="/login">Login</NavLink>
           {user?.email ? 
           <>
           <NavLink className ="mr-[20px] " to="/bookings">Bookings</NavLink>
           <button onClick={handleLogOut}>logOut</button>
           </> :
             <NavLink className ="mr-[20px] " to="/signin">SignIn</NavLink>
             
           }
        </div>
    );
};

export default Navbar;