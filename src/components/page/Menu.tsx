import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="md:ml-5">
      <ul className="list-none md:flex md:flex-row md:space-x-6">
        <Link to="#">Circles</Link>
        <Link to="#">Squares</Link>
        <Link to="#">Triangles</Link>
      </ul>
    </div>
  );
}