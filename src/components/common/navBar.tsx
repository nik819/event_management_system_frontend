import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import Icon from "../utils/Icon";

const NavBar = () => {
   
    const [pageTitle, setPageTitle] = useState("");
    const menus = ["Profile", "Logout"];

    const { id } = useParams();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            switch (path) {
                case "/dashboard":
                    setPageTitle("Dashboard");
                    break;
                case "/event":
                    setPageTitle("Events");
                    break;
                case "/vehicles":
                    setPageTitle("Vehicles");
                    break;
                case "/users":
                    setPageTitle("Users");
                    break;
                case "/profile":
                    setPageTitle("Profile");
                    break;
                case "/user":
                    setPageTitle("Add User");
                    break;
                case `/user/${id}`:
                    setPageTitle("Edit User");
                    break;
                case "/invoices":
                    setPageTitle("Invoices");
                    break;
                case "/invoice":
                    setPageTitle("Add Invoice");
                    break;
                case "/quotations":
                    setPageTitle("Quotations");
                    break;
                case "/quotation":
                    setPageTitle("Add Quotation");
                    break;
                case "/invoice-details":
                    setPageTitle("Invoice Detail");
                    break;
                case `/invoice/${id}`:
                    setPageTitle("Edit Invoice");
                    break;
                case `/quotation/${id}`:
                    setPageTitle("Edit Quotation");
                    break;
                case "/quotation-details":
                    setPageTitle("Quotation Detail");
                    break;
                default:
                    setPageTitle("");
                    break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="fixed top-0 right-0 w-full h-[52px] z-10 sm:h-[60px] text-text dark:text-text-dark bg-white px-3 sm:px-3 flex items-center justify-end">
                <div className="w-full flex items-center justify-between text-text dark:text-text-dark bg-white">
                    <div className="flex items-center gap-1">
                        <div className="text-sm md:text-lg font-bold">
                            {pageTitle}
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-5 items-center">
                        <div className="flex justify-center items-center">
                            <Menu>
                                <Menu.Button>
                                    <div className="md:flex items-center hidden">
                                        <div className="border-dark">
                                            <Icon
                                                icon="user-circle"
                                                className="w-12 h-12 rounded-full text-text/80 dark:text-text-dark/60"
                                            />
                                        </div>
                                    </div>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute top-[80px] right-2 bg-white dark:bg-bgc-dark shadow-md p-2 rounded-br-md rounded-bl-md dark:shadow-shadow-dark font-semibold ">
                                        <div className="w-[180px]">
                                            <div className="border-b pb-2 border-border dark:border-border-dark !bg-opacity-100 phone:mx-5 phone:px-5 opacity-70">
                                                <div className="font-normal text-sm">
                                                    Signed in as
                                                </div>
                                                <div
                                                    className="truncate font-semibold"
                                                    title={
                                                         "user@gmail.com"
                                                    }
                                                >
                                                    user@gmail.com
                                                </div>
                                            </div>
                                            {menus.map((menu) => (
                                                <Menu.Item key={menu}>
                                                    {({ focus }) => (   
                                                        <button
                                                            type="button"
                                                            className={`w-full p-2 cursor-pointer rounded ${
                                                                focus
                                                                    ? "bg-gray-500 text-white"
                                                                    : " hover:text-white"
                                                            }`}
                                                            // onClick={(e) => {
                                                            //     if (
                                                            //         menu ===
                                                            //         "Logout"
                                                            //     ) {
                                                            //         handleLogout(
                                                            //             e
                                                            //         );
                                                            //     } else {
                                                            //         setIsOpen(
                                                            //             false
                                                            //         );
                                                            //     }
                                                            // }}
                                                        >
                                                            {menu}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
