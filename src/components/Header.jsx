import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav
                className={`bottom-nav lg:h-[82px] md:h-[72px] h-[62px] px-5 items-center flex justify-between lg:text-[22px] md:text-[18px] text-[14px] lg:px-8 lg:space-x-16 md:space-x-10 text-gray-500  bg-white`}
            >
                <div className="flex justify-center items-center">
                    <Link
                        to="/"
                        className="lg:text-[25px] md:text-[20px] transition-all ease-in duration-200 hover:text-gray-900 hover:font-bold"
                    >
                        Home
                    </Link>

                    <Link
                        to="/admin"
                        className="lg:text-[25px] md:text-[20px] transition-all ease-in duration-200 hover:text-gray-900 hover:font-bold"
                    >
                        Admin
                    </Link>
                    <Link
                        to="/user"
                        className="lg:text-[25px] md:text-[20px] transition-all ease-in duration-200 hover:text-gray-900 hover:font-bold"
                    >
                        User
                    </Link>
                </div>
            </nav>
        </>
    )
}
