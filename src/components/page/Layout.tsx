import Header from './Header';
import Footer from './Footer';
interface Props {
  children: React.ReactElement | React.ReactElement[];
}
export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
