import Header from './Header';
import ServicesP from './ServicesP';
// import SectinP from './SectionP';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      {/* <SectinP /> */}
      <ServicesP />
      <Footer />
    </div>
  );
};

export default LandingPage;
