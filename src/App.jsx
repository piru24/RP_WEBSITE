import CyberBackground from './components/CyberBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Domain from './sections/Domain.jsx';
import Research from './sections/Research.jsx';
import Features from './sections/Features.jsx';
import Tools from './sections/Tools.jsx';
import Milestones from './sections/Milestones.jsx';
import Documents from './sections/Documents.jsx';
import Team from './sections/Team.jsx';
import DemoVideo from './sections/DemoVideo.jsx';
import ProjectLinks from './sections/ProjectLinks.jsx';
import References from './sections/References.jsx';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cyber-black text-slate-100">
      <CyberBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Domain />
        <Research />
        <Features />
        <Tools />
        <Milestones />
        <Documents />
        <Team />
        <DemoVideo />
        <ProjectLinks />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
