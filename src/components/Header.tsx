import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./utils/Icon";

const Header = () => {
    const [activeMode, setActiveMode] = useState<string>("");
    const [themeOpen, setThemeOpen] = useState(false);
    const [authOpen, setauthOpen] = useState(false);

    useEffect(() => {
        let isDark = false;
        if (
            !("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
            isDark = true;
            setActiveMode("moon");
        }
        if (localStorage.theme === "dark") {
            isDark = true;
            setActiveMode("moon");
        } else if (localStorage.theme === "light") {
            setActiveMode("sun");
        }
        setThemeMode(isDark);
    }, []);
    /* const clickHandler = (mode: string) => {

        if (mode === "dark") {
            setIsDark(true);
            localStorage.setItem("theme", "dark");
        } else if (mode === "light") {
            setIsDark(false);
            localStorage.setItem("theme", "light");
        } else {
            setIsDark(false);
            localStorage.removeItem("theme");
            if (
                !("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                setIsDark(true);
            }
        }
        changeMode();
    } */

    const setThemeMode = (isDark: boolean) => {
        if (
            !("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
            isDark = true;
        }

        // setIsDark(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <>
            <nav className="flex justify-between px-5 items-center border-b dark:border-slate-800  dark:text-white border-gray-100 fixed w-full top-0 bg-gray-400 dark:bg-transparent dark:backdrop-blur">
                <Link
                    to=""
                    className="float-left items-center text-2xl font-medium text-indigo-500 dark:text-gray-100 p-4"
                >
                    <span>TestDemo</span>
                </Link>
                <ul className="flex gap-5">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link dark:hover:bg-slate-900 hover:bg-gray-100"
                        >
                            Home
                        </Link>
                    </li>
                    <Link to="" className="" onClick={() => setauthOpen(!authOpen)}>
                        Authentication
                    </Link>
                    {authOpen &&
                        <ul className="absolute top-[70%] space-y-1 right-[20%] dark:bg-slate-800 dark:text-white bg-white rounded-md">
                            <li className="dark:hover-bg-slate-900 hover:bg-gray-100">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="dark:hover-bg-slate-900 hover:bg-gray-100">
                                <Link to="/registration">Registration</Link>
                            </li>
                            <li className="dark:hover-bg-slate-900 hover:bg-gray-100">
                                <Link to="/ForgotPassword">ForgotPassword</Link>
                            </li>
                            <li className="dark:hover-bg-slate-900 hover:bg-gray-100">
                                <Link to="/ResetPassword">ResetPassword</Link>
                            </li>
                        </ul>
                    }
                    <li className="chat-item">
                        <Link
                            to="/event"
                            className="nav-link  dark:hover:bg-slate-900 hover:bg-gray-100"
                        >
                            Events
                        </Link>
                    </li>
                    <li className="about-item">
                        <Link
                            to="/about-us"
                            className="nav-link  dark:hover:bg-slate-900 hover:bg-gray-100"
                        >
                            About
                        </Link>
                    </li>
                    <li className="contact-item">
                        <Link
                            to="/contact-us"
                            className="nav-link  dark:hover:bg-slate-900 hover:bg-gray-100"
                        >
                            ConatactUs
                        </Link>
                    </li>
                    <Icon
                        icon="desktop-computer"
                        className="h-6 w-6 text-gray-900 dark:text-white cursor-pointer"
                        onClick={() => setThemeOpen(!themeOpen)}
                    />

                    {themeOpen &&
                        <ul className="absolute right-[2%] top-[70%] z-[1000] w-32 dark:bg-slate-800 dark:text-white bg-gray-200 rounded-md">
                            <li className="w-full dark:hover:bg-slate-900 hover:bg-gray-100 cursor-pointer">
                                <span
                                    className="gap-3 mode_link"
                                    data-title="light"
                                    onClick={() => {
                                        localStorage.setItem("theme", "light");
                                        setActiveMode("sun");
                                        setThemeMode(false);
                                    }}
                                >
                                    <Icon
                                        icon="sun"
                                        className="h-6 w-6 text-gray-900 dark:text-white"
                                    />
                                    Light
                                </span>
                            </li>
                            <li className="w-full cursor-pointer dark:hover:bg-slate-900 hover:bg-gray-100">
                                <span
                                    className="gap-3 mode_link "
                                    data-title="dark"
                                    onClick={() => {
                                        setThemeMode(true);
                                        setActiveMode("moon");
                                        localStorage.setItem("theme", "dark");
                                    }}
                                >
                                    <Icon
                                        icon="moon"
                                        className="h-6 w-6 text-gray-900 dark:text-white"
                                    />
                                    Dark
                                </span>
                            </li>
                            <li className="w-full cursor-pointer dark:hover:bg-slate-900 hover:bg-gray-100">
                                <span
                                    className="gap-3 mode_link"
                                    data-title="system"
                                    onClick={() => {
                                        setThemeMode(false);
                                        setActiveMode("");
                                        localStorage.removeItem("theme");
                                    }}
                                >
                                    <Icon
                                        icon="desktop-computer"
                                        className="h-6 w-6 text-gray-900 dark:text-white"
                                    />
                                    System
                                </span>
                            </li>
                        </ul>
                    }
                </ul>
            </nav>
        </>
    );
};

export default Header;
