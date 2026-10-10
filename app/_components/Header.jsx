import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavIcon from "./NavIcon";

function Header() {
  return (
    <header className="col-start-1 col-end-7 px-8 py-4 flex shadow-sm items-center">
      <Bars3Icon className="h-6 w-6 text-primary" />
      <Logo />
      <NavIcon />
    </header>
  );
}

export default Header;
