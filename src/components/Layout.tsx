import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactElement[];
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}