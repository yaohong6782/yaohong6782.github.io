import "./App.css";
import Navigator from "./components/navigator/Navigator";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects"
import Experience from "./components/experiences/Experience";


import { MantineProvider, TypographyStylesProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <TypographyStylesProvider className="main-page">
        <Navigator />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience/>
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;
