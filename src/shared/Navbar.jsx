import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");
  
  // Function to handle scroll event
  const handleScroll = () => {
    setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      child: [
        {
          name: "Cookie policy",
          link: "/cookie"
        },
        {
          name: "Privacy policy",
          link: "/privacy"
        },
        {
          name: "General Condition",
          link: "/general"
        }
      ]
    },
    {
      name: "Features",
      link: "/features"
    },
    {
      name: "Products",
      link: "/products"
    },
    {
      name: "FAQ?",
      link: "/faq",
    },
    {
      name: "Global Support",
      link: "/support",
    },
  ];

  return (
    <nav className="sticky top-0 shadow-lg shadow-gray-400 bg-white z-50">
      <section className="py-2.5 mx-5 md:container md:mx-auto flex justify-between items-center">
        {/* Logo here */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-[50px] md:h-[70px]" alt="" />
        </Link>
        
        {/* Desktop view */}
        <div className="hidden lg:flex lg:gap-8 lg:items-center">
          {MenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div className="relative group text-[18px]">
                  <span className="flex items-center gap-1 cursor-pointer font-semibold">
                    {mi.name}
                    <BiChevronDown className="text-2xl" />
                  </span>
                  <div className="absolute bg-white left-5 p-5 shadow rounded min-w-[420px] hidden group-hover:flex flex-col gap-2">
                    {mi.child.map((mc, i) => (
                      <Link to={mc.link} key={i} className="flex gap-1.5 hover:font-semibold hover:translate-x-3 hover:text-primary duration-300 ease-linear">
                        <span className="flex-1">{mc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={mi.link}
                  key={i}
                  className="text-[18px] font-semibold flex items-center gap-2.5"
                >
                  {mi.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile view */}
        {showNav ? (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <CgClose className="text-2xl" />
          </button>
        ) : (
          <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
            <FaBars className="text-xl" />
          </button>
        )}
        
        {showNav && (
          <div className="lg:hidden p-5 md:px-14 flex flex-col gap-4 absolute top-16 left-0 bg-white min-w-full h-80">
            {MenuItems.map((mi, i) => (
              <div key={i}>
                {mi.child ? (
                  <div>
                    <div className="text-[18px] flex justify-between items-center">
                      {mi.name}
                      {showChild !== i ? (
                        <button
                          onClick={() => setShowChild(i)}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <BiChevronDown className="text-3xl" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowChild("")}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <BiChevronUp className="text-3xl" />
                        </button>
                      )}
                    </div>
                    {showChild === i && (
                      <div className="ml-4 mt-4 flex flex-col gap-4">
                        {mi.child.map((mc, i) => (
                          <Link
                            to={mc.link}
                            key={i}
                            onClick={() => setShowNav(!showNav)}
                            className="text-[18px] flex gap-1.5"
                          >
                            <BiChevronRight className="text-2xl" />
                            {mc.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={mi.link}
                    key={i}
                    onClick={() => setShowNav(!showNav)}
                    className="text-[18px] flex justify-between items-center"
                  >
                    {mi.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="bg-primary w-full h-0.5"></div>
    </nav>
  );
}
