import Header from './Header';
import Footer from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
interface Props {
  children: React.ReactElement | React.ReactElement[];
}
export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumbs />
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
