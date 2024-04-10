import { MdOutlineTravelExplore } from "react-icons/md";
import useScroll from "../hooks/useScroll";
import { CiMenuFries } from "react-icons/ci";
import useMenu from "../hooks/useMenu";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const scroll = useScroll();
  const { toggle, onClick, hideMenu } = useMenu();

  return (
    <header
      className={`bg-white h-16 flex items-center fixed top-0 left-0 right-0 z-50 ${scroll}`}
    >
      <div className="flex items-center justify-between w-4/5 mx-auto text-sm">
        <div className="flex items-center gap-2 text-primary relative z-50">
          <MdOutlineTravelExplore className="text-xl" />
          <span>Travel.</span>
        </div>
        <nav
          className={`fixed z-10 bottom-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:transform-none ${
            toggle
              ? "flex items-center justify-center bg-white w-full h-screen z-40"
              : "hidden lg:block"
          }`}
        >
          <ul className="flex items-center flex-col gap-6 lg:flex-row">
            <li onClick={hideMenu}>
              <a href="#">Home</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">Packages</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">Shop</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">About</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">Pages</a>
            </li>
            <li onClick={hideMenu}>
              <a href="#">News</a>
            </li>
            <li
              className="sm:hidden"
              onClick={hideMenu}
            >
              <a
                href="#"
                className="btn bg-gradient-to-tr from-primary to-secondary rounded-full text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <a
            href="#"
            className="btn bg-gradient-to-tr from-primary to-secondary rounded-full text-white"
          >
            Contact
          </a>
        </div>

        {toggle ? (
          <FaXmark
            className="block lg:hidden text-xl relative z-50 transition-all duration-500"
            onClick={onClick}
          />
        ) : (
          <CiMenuFries
            className="block lg:hidden text-xl relative z-50 transition-all duration-500"
            onClick={onClick}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
