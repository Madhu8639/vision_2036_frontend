import NavMenu from './NavMenu';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="sports-gradient text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className=" flex items-center justify-between">
          <Logo />
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;