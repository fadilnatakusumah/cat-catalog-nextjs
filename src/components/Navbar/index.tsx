"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import "./index.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  // const {}
  const pathname = usePathname();
  // const { pathname } = window.location;

  return (
    <div className="navbar-wrapper">
      <div>
        <div className="navbar--logo">
          <Image alt="" src={`/catlogo.png`} height={30} width={30} />
          <div>CatShop.com</div>
        </div>
        <div className="navbar--navigations">
          <nav>
            <Link className={pathname === "/" ? "active" : ""} href="/">
              Home
            </Link>
            <Link
              className={pathname === "/products" ? "active" : ""}
              href="/cats"
            >
              Cats
            </Link>
          </nav>
          <div>
            <input placeholder="Search..." />
            <FaSearch color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
