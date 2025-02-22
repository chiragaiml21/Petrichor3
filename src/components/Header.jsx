"use client";

import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import TopBanner from "./TopBanner";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import LOGO from "../assets/LOGO.png"
// import LOGO2 from "../assets/LOGO2.png"

const Header = () => {
  const { data: session } = useSession();
  const isAdmin = session?.user.isAdmin;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <TopBanner />
      <div className="w-[100%] flex justify-center h-20 border">
        <div className="header flex justify-between h-20 items-center w-11/12 sm:w-4/5 relative">
          <div className="flex w-full justify-between sm:w-32">
            {menuOpen ? (
              <X
                strokeWidth={1}
                className="z-[100] text-xl sm:hidden bg-white absolute left-0 top-7"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                strokeWidth={1}
                className="z-50 text-xl sm:hidden absolute left-0 top-7"
                onClick={toggleMenu}
              />
            )}
            <Link href={"/"} className="w-40">
              <img src="/Final_Logo.png" alt="PETRICHOR" className="mt-1 ml-8 sm:ml-0" />
            </Link>
          </div>

          <div className="navbar flex w-full">
            <ul className="sm:flex justify-between px-4 hidden">
              <li className="px-2 hover:underline hover:decoration-solid">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="px-2 hover:underline hover:decoration-solid">
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>

          <div className="navbar">
            <ul className="flex justify-between">
              <li className="px-2 hover:scale-110 hover:cursor-pointer">
                <Link href={"/search"}>
                  <Search strokeWidth={1} />
                </Link>
              </li>
              <li className="hidden px-2 hover:scale-110 sm:block">
                {session ? (
                  isAdmin ? (
                    <Link href={"/admin"}>
                      <User strokeWidth={1} />
                    </Link>
                  ) : (
                    <Link href={"/profile"}>
                      <User strokeWidth={1} />
                    </Link>
                  )
                ) : (
                  <Link href={"/login"}>
                    <User strokeWidth={1} />
                  </Link>
                )}
              </li>
              <li className="px-2 hover:scale-110">
                <Link href={"/cart"}>
                  <ShoppingCart strokeWidth={1} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
            <ul className="flex flex-col items-center">
              <li className="px-2 py-4 text-xl hover:underline hover:decoration-solid">
                <Link href={"/"} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="px-2 py-4 text-xl hover:underline hover:decoration-solid">
                <Link href={"/products"} onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li className="px-2 py-4 text-xl hover:underline hover:decoration-solid">
                <Link href={"/about"} onClick={toggleMenu}>
                  About
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col items-center">
              <li className="px-2 py-4 text-xl hover:underline hover:decoration-solid">
                <Link href={"/login"} onClick={toggleMenu}>
                  <User strokeWidth={1} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
