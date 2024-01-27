import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      {/* Logo of the webapp */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        Trial
      </Link>
      <form>
        {/* for search tab */}
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* for small screen search button */}
      <Button className="w-12 h-10 lg:hidden" color="grey" pill>
        <AiOutlineSearch />
      </Button>
      {/* Dark/Light Mode and Sign in button */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="sign-in">
          <Button color="purple" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Collapse Nav bar with links */}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/message"} as={"div"}>
          <Link to="/message">Message</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};