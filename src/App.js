import Header from './components/header/Header';
import './App.css';
import About from './components/body/about/About';
import Education from './components/body/education/Education';
import Experience from './components/body/Experience/Experience';
import Techonology from './components/body/Technologies/Techonology';
import Navigation from './components/Navigations/Navigation';
import Projects from './components/body/Projects/Projects';

function App() {
  return (
    <div>
        <Header/>
        <Navigation/>
        <About/>
        <Education/>
        <Projects/>
        <Experience/>
        <Techonology/>
    </div>
  );
}

export default App;
