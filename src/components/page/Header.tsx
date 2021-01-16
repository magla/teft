import { useState } from 'react';
import Menu from "./Menu";
import Search from "./Search";
import Logo from "./Logo";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="shadow h-72 w-screen p-16 flex items-center">
      <div className="container flex">
        <div className="flex-none order-first flex align-center lg:order-2 lg:flex-1 lg:items-end">
          <Menu />
        </div>
        <div className={`flex-1 flex justify-center order-2 ${searchOpen && 'hidden'} lg:flex lg:flex-none lg:order-first lg:justify-start`}>
          <Logo />
        </div>
        <div className={`${searchOpen && 'flex-1'} order-last flex items-center`}>
          <Search onToggle={setSearchOpen} />
        </div>          
      </div>
    </header>
  );
}