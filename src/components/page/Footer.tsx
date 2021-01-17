import { Link } from "react-router-dom";
import Logo from "./Logo";
import FooterSection from "./FooterSection";
import SocialSection from "./SocialSection";

export default function Footer() {
  return (
    <footer className="w-screen py-48 shadow-light">
      <div className="container">
        <Logo />
        <div className="flex flex-col mt-48 lg:space-x-48 lg:flex-row lg:justify-between">
          <div className="flex-1 mb-48 lg:mb-0">
            <FooterSection>
              <p>Dekode AS</p>
              <p>Tif: 23 08 00 00</p>
              <p>E-post: info@dekode.no</p>
            </FooterSection>
            <FooterSection className="mt-64">
              <p>Tollbugata 11, Oslo</p>
              <p>Postboks 489 Sentrum, 0105 Oslo</p>
            </FooterSection>
          </div>
          <div className="flex-1 mb-24 lg:mb-0">
            <FooterSection>
              <Link className="link" to="#">Tjenester</Link>
              <Link className="link" to="#">Produkter</Link>
              <Link className="link" to="#">Kontakt</Link>
              <Link className="link" to="#">Abonnement</Link>
              <Link className="link" to="#">Logg inn</Link>
            </FooterSection>
          </div>
          <div className="flex-1">
            <FooterSection className="mb-72">
              <Link className="link" to="#">Personvernerklæring</Link>
              <Link className="link" to="#">Cookies</Link>
              <Link className="link" to="#">Language: ENG (US)</Link>
            </FooterSection>
            <SocialSection facebookUrl="#" twitterUrl="#" instagramUrl="#" />
          </div>
        </div>
      </div>
    </footer>
  );
}