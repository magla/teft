import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import Menu from "./Menu";
import Search from "./Search";

export default function Header() {
    return (
      <div className="shadow h-xxl w-screen p-md">
        <div className="container flex flex-row">
          <div className="order-2 justify-self-center md:order-first"><Logo /></div>
          <div className="order-first md:order-2"><Menu /></div>
          <div className="order-last"><Search /></div>          
        </div>
      </div>
    );
}