import Dropdown from "./Dropdown";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10">
      <Logo />
      <Dropdown />
    </header>
  );
};
export default Header;
