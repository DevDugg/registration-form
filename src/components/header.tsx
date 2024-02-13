import Dropdown from "./dropdown";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10">
      <Logo />
      <Dropdown />
    </header>
  );
};
export default Header;
