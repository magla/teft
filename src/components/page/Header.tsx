import Menu from "./Menu";
import Search from "./Search";
import Logo from "./Logo";

export default function Header() {
    return (
      <div className="shadow h-72 w-screen p-16">
        <div className="container flex flex-row">
          <div className="order-2 justify-self-center sm:order-first">
            <Logo />
          </div>
          <div className="order-first sm:order-2">
            <Menu />
          </div>
          <div className="order-last">
            <Search />
          </div>          
        </div>
      </div>
    );
}