import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="sm:ml-48">
      <ul className="list-none sm:flex sm:flex-row sm:space-x-64">
        <Link to="#">Circles</Link>
        <Link to="#">Squares</Link>
        <Link to="#">Triangles</Link>
      </ul>
    </div>
  );
}