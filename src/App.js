import './App.css';
import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Projects from './components/Projects/Projects'
import { useState } from 'react';

function App() {

  const [showAboutMe, setShowAboutMe] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const handleAboutMeClick = () => {
    setShowAboutMe(!showAboutMe)
    setShowProjects(false)
  }
  const handleProjectsClick = () => {
    setShowProjects(!showProjects)
    setShowAboutMe(false)
  }

  return (
    <div className="App">
      {showAboutMe === false && showProjects === false && (
        <Landing
          handleAboutMeClick={handleAboutMeClick}
          handleProjectsClick={handleProjectsClick}
        />
      )}

      {showAboutMe && <AboutMe
        showProjects={showProjects}
        setShowProjects={setShowProjects}
        handleProjectsClick={handleProjectsClick} />}

      {showProjects && <Projects
        handleAboutMeClick={handleAboutMeClick} />}
    </div>
  );
}

export default App;
