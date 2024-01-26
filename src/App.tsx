import About2 from './components/About2';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <Portfolio />
      <About2 />   
      <Contact />
      <Footer />
      <SocialLinks />

    </main>
  );
}

export default App;
