import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close } from '../../assets/images';
import { ClickableIcon } from '../ui';

export function Menu() {
  const [open, setOpen] = useState(false);

  // TODO: Mobile
  return (
    <>
      <ClickableIcon onClick={() => setOpen(!open)} className="hide-on-desktop">
        {open ? <Close /> : <MenuIcon />}
      </ClickableIcon>

      <nav className="hide-on-mobile lg:ml-64">
        <ul className="list-none flex flex-row space-x-64">
          <Link to="#">Circles</Link>
          <Link to="#">Squares</Link>
          <Link to="#">Triangles</Link>
        </ul>
      </nav>
    </>
  );
}
