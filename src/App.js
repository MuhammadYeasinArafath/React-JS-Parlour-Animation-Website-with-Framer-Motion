

import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Milestones from './components/Milestones';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import ScrollToTop from './components/ScrollToTop';
import Service from './components/Service';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Video from './components/Video';

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Home></Home>
      <Service></Service>
      <Portfolio></Portfolio>
      <Milestones></Milestones>
      <Blog></Blog>
      <Video></Video>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
