import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close } from '../../assets/images';
import { ClickableIcon } from '../ui';

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ClickableIcon onClick={() => setOpen(!open)} className="hide-on-desktop">
        {open ? <Close /> : <MenuIcon />}
      </ClickableIcon>

      <nav className="hide-on-mobile lg:ml-64" role="navigation">
        <ul className="list-none flex flex-row space-x-64">
          <Link to="/circles">Circles</Link>
          <Link to="/squares">Squares</Link>
          <Link to="/triangles">Triangles</Link>
        </ul>
      </nav>
    </>
  );
}
