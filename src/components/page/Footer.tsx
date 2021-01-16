import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from "./Logo";
import Link from "./Link";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="w-screen py-48 shadow-light">
      <div className="container">
        <Logo />
        <div className="flex flex-col mt-48 md:space-x-48 md:flex-row md:justify-between">
          <div className="flex-1 mb-48 md:mb-0">
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
          <div className="flex-1 mb-24 md:mb-0">
            <FooterSection>
              <Link to="#">Tjenester</Link>
              <Link to="#">Produkter</Link>
              <Link to="#">Kontakt</Link>
              <Link to="#">Abonnement</Link>
              <Link to="#">Logg inn</Link>
            </FooterSection>
          </div>
          <div className="flex-1">
            <FooterSection>
              <Link to="#">Personvernerklæring</Link>
              <Link to="#">Cookies</Link>
              <Link to="#">Language: ENG (US)</Link>
            </FooterSection>
            <div className="flex space-x-24 mt-72">
              <Link to="#"><TwitterIcon /></Link>
              <Link to="#"><InstagramIcon /></Link>
              <Link to="#"><FacebookIcon /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}