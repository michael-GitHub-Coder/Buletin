import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaAngleRight, FaTimes } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import Write from "./Write";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
      setShowComponent(true); 
  };

  return (
    <div>
      <nav className="mx-5 mt-2 -mb-7">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-3xl text-red-600">Buletin.</div>
          <ul className="hidden md:flex gap-11 font-bold cursor-pointer">
                <li className="hover:text-red-600">
                    <a href="#LatestNews">News</a>
                </li>
                {/* <li className="hover:text-red-600">
                    <a href="#">Creator</a>
                </li> */}
                <li className="hover:text-red-600">
                    <a href="#">Community</a>
                </li>
                <li className="hover:text-red-600">
                    <a href="#subscribe">Subscribe</a>
                </li>
          </ul>
          <div className="hidden md:flex gap-11">
            <div className="flex gap-2">
              <FaRegPenToSquare className="h-6 text-red-600" />
              <h3 className="hover:text-red-600">
                <a href="#" >Write</a>
              </h3>
              {/* {showComponent && <Write />}  */}
            </div>
            <a href="#">
              <GoBell className="h-7 text-red-600" />
            </a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
                <CiMenuBurger className="text-2xl" />
          </button>

        </div>

   
        {isOpen && (
            <div className="fixed text-white top-0 left-0 w-full h-full bg-red-600 z-50 flex flex-col  space-y-4">

              <button
                className="absolute top-4 right-10 text-white"
                onClick={() => setOpen(!isOpen)}
              >
                <FaTimes className="text-3xl" />
              </button>
              
              <ul className="flex flex-col px-8 py-20 gap-4 font-bold cursor-pointer">
                <li className="hover:underline flex justify-between mr-4">
                  <a href="#">News</a>
                </li>
                {/* <li className="hover:underline">
                  <a href="#">Creator</a>
                </li> */}
                <li className="hover:underline">
                  <a href="#">Community</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Subscribe</a>
                </li>
              </ul>
            </div>
          )}

      </nav>
    </div>
  );
};
