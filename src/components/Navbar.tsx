import React from "react"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi/index"
import { ImCross } from "react-icons/im/index"
import { AnimatePresence, motion } from "framer-motion"
import navbarItems from "./../data/navbarItems"
import { useScrollPosition } from "../hooks/useScrollPosition"
export interface NavbarItem {
  title: string
  url: string
}

const ulContainer = {
  hidden: {
    x: "600px",
    opacity: 0,
  },
  show: {
    x: "250px",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
  exit: {
    x: "600px",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}
const navbarItem = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

function Navbar() {
  const [activeItem, setActiveItem] = React.useState("Home")
  const [toggle, setToggle] = React.useState(false)
  const scrollPosition = useScrollPosition()
    return (
        <Router>
    <nav
      className={[
        "fixed bg-[rgba(255,255,255,0.8)] backdrop-blur-sm w-full text-gray-900 z-50",
        scrollPosition > 0 ? "shadow-black shadow-sm" : "",
      ].join(" ")}>
      <div className="flex justify-between">
        <div className="flex items-center justify-center ml-4 mr-8 ">
          H.<span className="text-blue-500">G</span>
        </div>
        <ul className="sm:flex hidden justify-evenly w-full">
          {navbarItems.map((item, index) => (
            <li
              className={[
                "cursor-pointer duration-300 transition-all w-full text-center",
                activeItem === item.title
                  ? "text-blue-500 border-blue-500 border-b-2 "
                  : "",
              ].join(" ")}
              key={"navBarItem-" + index}>
              <Link
                to={item.title.toLowerCase()}

  
                className="">
                <div
                  className=" py-4"
                  onClick={() => {
                    setActiveItem(item.title)
                  }}>
                  {" "}
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="m-4 flex sm:hidden justify-center">
          {!toggle ? (
            <GiHamburgerMenu
              size={30}
              onClick={() => setToggle(!toggle)}
              className="text-gray-500"
            />
          ) : (
            <ImCross
              size={26}
              onClick={() => setToggle(!toggle)}
              className="text-gray-500"
            />
          )}
        </div>
      </div>

      {
        <AnimatePresence>
          {toggle && (
            <motion.ul
              variants={ulContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed w-full h-screen flex justify-between flex-col  bg-[rgba(255,255,255,0.8)]  backdrop-blur-sm sm:hidden ">
              {toggle &&
                navbarItems.map((item, index) => (
                  <motion.li
                    onClick={() => {
                      setToggle(false)
                    }}
                    variants={navbarItem}
                    className="cursor-pointer py-4 duration-300 transition-all flex ml-8 xs:ml-24 justify-start "
                    key={"navBarItem-" + index}>
                    <div className="font-semibold">{item.title}</div>
                  </motion.li>
                ))}
            </motion.ul>
          )}
        </AnimatePresence>
      }
      </nav>
      
      <Switch>
        {navbarItems.map((item, index) => (
            <Route path={"/" + item.title.toLowerCase()} key={"route-" + index}>
                {item.component}
            </Route>
        ))}

      </Switch>
      </Router>
  )
}

export default Navbar
