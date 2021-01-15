import Header from './Header';
import Footer from './Footer';
import { Breadcrumbs } from './Breadcrumbs';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}