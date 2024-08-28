import './App.css';
import HeroSection from './component/HeroSection';
import Nav from './component/Nav';
import About from './component/About';
import ProjectSection from './component/ProjectSection';

function App() {
  return (
    <div className='container'>
      <Nav/>
      <HeroSection/>
      <About/>
      <ProjectSection/>
    </div>
  );
}

export default App;
