import Header from './Header';
import Footer from './Footer';

const LandingPage = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPage;
