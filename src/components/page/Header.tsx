import { useState } from 'react';
import { Menu } from '../navigation';
import { Search, Logo } from '../ui';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="shadow h-72 min-h-72 flex items-center">
      <div className="container flex font-bold text-header">
        <div className="flex-none order-first flex align-center lg:order-2 lg:flex-grow lg:items-end">
          <Menu />
        </div>
        <div
          className={`flex-grow flex justify-center order-2 ${
            searchOpen && 'hidden'
          } lg:flex lg:flex-none lg:order-first lg:justify-start lg:relative lg:-bottom-8`}
        >
          <Logo />
        </div>
        <div
          className={`${
            searchOpen && 'flex-grow'
          } order-last flex items-center`}
        >
          <Search onToggle={setSearchOpen} />
        </div>
      </div>
    </header>
  );
}
