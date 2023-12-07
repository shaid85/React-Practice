import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import useThemeCnr from "../../Context/ThemeContext";



export default function Header() {
    const {themeMode, darkTheme, lightTheme} = useThemeCnr()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }

    const [hidden, setHidden] = useState("max-h-0")

    const handelclick = () => {
        const btn = document.querySelector("#showmenu");

        if(hidden != "max-h-40"){
            setHidden("max-h-40")
        }else{
            setHidden("max-h-0")
        }
    }

    useEffect(() => {
        setHidden("max-h-0")
    }, [])

    const ulclick = () => {
    setTimeout(() => {
        setHidden("max-h-0")
        }, 100);
            
    }    
    return (
        <header className=" bg-white shadow sticky z-50 top-0 dark:bg-gray-800 text-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12 dark:hidden" 
                            alt="Logo"
                        />
                        <img
                            src={logo2}
                            className="mr-3 h-12 hidden dark:block" 
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/contest"
                            className="text-gray-800 dark:text-white   font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white hidden md:block">Toggle Theme</span>
        </label>
        <div class="md:hidden flex items-center lg:order-2 ml-2 mt-1">
            <button onClick={handelclick}
                id="showmenu" class="text-3xl cursor-pointer " >
                <div class="hover:cursor-pointer ">
                    <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                    <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                    <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                </div>
            </button>
        </div>        
                    </div>
                    <div
                        className={`lg:!max-h-none lg:!overflow-hidden w-full overflow-hidden lg:flex lg:items-center transition-all lg:w-auto mobilemenu ${hidden}`}
                        id="mobile-menu-2"
                    >
                    <div class="text-sm lg:flex-grow">
                        <ul onClick={ulclick} className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
 
                            {/* <li>
                                <NavLink to="/github"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/currencyapp"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    $Converter
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/priceavg"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Price avg
                                </NavLink>
                            </li>  

                            <li>
                                <NavLink to="/todo"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700 dark:text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Todo
                                </NavLink>
                            </li>
                      
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
}

