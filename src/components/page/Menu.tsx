import { useState } from 'react';
import { Link } from "react-router-dom";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import ClickableIcon from "./ClickableIcon";

export default function Menu() {
  const [open, setOpen] = useState(false);

  // TODO: Mobile
  return (
    <>
      <ClickableIcon onClick={() => setOpen(!open)} className="hide-on-desktop">
        {open? <CloseSharpIcon /> : <MenuSharpIcon />}
      </ClickableIcon>

      <nav className={`hide-on-mobile lg:ml-48`}>
        <ul className={`list-none flex flex-row space-x-64`}>
          <Link to="#">Circles</Link>
          <Link to="#">Squares</Link>
          <Link to="#">Triangles</Link>
        </ul>
      </nav>

    </>
  );
}