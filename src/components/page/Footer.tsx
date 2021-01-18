import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui';
import FooterSection from './FooterSection';
import { SocialSection } from './SocialSection';

export default function Footer() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(process.env.REACT_APP_LANGUAGE);

  const handleLanguageSelect = useCallback((lang) =>{
    setLanguageOpen(false);
    setLanguage(lang);
  }, []);

  return (
    <footer className=" py-48 shadow-light">
      <div className="container">
        <Logo />
        <div className="flex flex-col mt-48 lg:space-x-48 lg:flex-row lg:justify-between">
          <div className="flex-1 mb-48 lg:mb-0">
            <FooterSection>
              <span>Dekode AS</span>
              <span>Tif: 23 08 00 00</span>
              <span>E-post: info@dekode.no</span>
            </FooterSection>
            <FooterSection className="mt-64">
              <span>Tollbugata 11, Oslo</span>
              <span>Postboks 489 Sentrum, 0105 Oslo</span>
            </FooterSection>
          </div>
          <div className="flex-1 mb-24 lg:mb-0">
            <FooterSection>
              <Link className="link" to="#">
                Tjenester
              </Link>
              <Link className="link" to="#">
                Produkter
              </Link>
              <Link className="link" to="#">
                Kontakt
              </Link>
              <Link className="link" to="#">
                Abonnement
              </Link>
              <Link className="link" to="#">
                Logg inn
              </Link>
            </FooterSection>
          </div>
          <div className="flex-1">
            <FooterSection className="mb-72">
              <Link className="link" to="#">
                Personvernerklæring
              </Link>
              <Link className="link" to="#">
                Cookies
              </Link>
              {!languageOpen && (
                <button className="link" onClick={() => setLanguageOpen(true)}>
                  Language: {language}
                </button>
              )}
              {languageOpen && (
                <div className="flex space-x-16">
                  <button className="link" onClick={() => handleLanguageSelect('ENG (US)')}>
                    ENG (US)
                  </button>
                  <button className="link" onClick={() => handleLanguageSelect('ENG (UK)')}>
                    ENG (UK)
                  </button>
                </div>
              )}
            </FooterSection>
            <SocialSection facebookUrl="#" twitterUrl="#" instagramUrl="#" />
          </div>
        </div>
      </div>
    </footer>
  );
}
