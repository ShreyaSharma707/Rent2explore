import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import {useUser} from "../context/UserContext.jsx";

const Navbar = () => {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const { user, logout } = useUser();
    const currentUser = !!user && user?.firstName;

    const scrollOnTop = () => {
        window.scrollTo(0, 0);
    }

    const navItemsUser = [
        {name: "Home", path: "/"},
        {name: "My Bookings", path: "/my-bookings"},
        {name: "Contact", path: "/contact"}
    ]

    const navItemsNonUser = [
        {name: "Home", path: "/"},
        {name: "Contact", path: "/contact"}
    ]

    const navItems = currentUser ? navItemsUser : navItemsNonUser;

    return (
         <>
             <nav className="relative hidden lg:flex justify-evenly items-center bg-[#0f0f12] border-b border-[#c9a227]/25 text-[#f5f1e8] h-[70px]">
                <h1 className="absolute left-6 text-2xl font-semibold tracking-wide">Rent<span className="text-[#c9a227]">2explore</span></h1>
                 {currentUser && <p className="text-lg">Welcome, {currentUser}</p>}
                <div className="flex justify-between gap-5">
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.path} className="text-lg font-semibold hover:text-[#c9a227]">{item.name}</Link>
                    ))}
                </div>
                 <Button label={currentUser ? 'Logout' : 'Login'}
                         className="absolute right-6 dark-luxury-button font-semibold rounded-full min-w-[140px] py-3"
                         onClick={() => {
                             if(currentUser) {
                                 logout();
                                 navigate('/login');
                             } else navigate('/login');
                         }
                        }
                 />
             </nav>
             <nav className="flex justify-between lg:hidden items-center bg-[#0f0f12] border-b border-[#c9a227]/25 h-[5vh] px-2">
                 <h1 className="text-2xl font-semibold text-[#f5f1e8]">Rent<span className="text-[#c9a227]">2explore</span></h1>
                 {currentUser && <p className="text-lg text-gray-300">Welcome, {currentUser}</p>}
                 <div className="z-50">
                     <button className={toggle ? "menu x" : "menu"}
                             onClick={() => setToggle(prevState => !prevState)}>
                         <span></span>
                         <span></span>
                         <span></span>
                     </button>
                 </div>
             </nav>
             <div className="relative">
                 <div className={`absolute flex flex-col bg-[#0f0f12] border-b border-[#c9a227]/25 text-center h-[25rem] left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-50`}>
                     {navItems.map((item, index) => {
                         return (
                             <Link to={item.path}
                                   key={index}
                                   className="text-xl text-white hover:bg-[#c9a227] hover:text-black font-semibold w-full flex-grow flex justify-center items-center duration-500"
                                   onClick={() => {
                                       setToggle(false);
                                       scrollOnTop();
                                   }}
                             >
                                 {item.name}
                             </Link>
                         );
                     })}
                     <Button label={currentUser ? 'Logout' : 'Login'}
                             className="w-1/2 my-4 mx-auto dark-luxury-button font-semibold rounded-full py-3"
                             onClick={() => {
                                 if(currentUser) {
                                     logout();
                                     setToggle(false);
                                     navigate('/');
                                 } else navigate('/login');
                             }
                             }
                     />
                 </div>
             </div>
         </>
    );
};

export default Navbar;