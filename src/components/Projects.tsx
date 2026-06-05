import { useState } from 'react';
import './Projects.css';
import SpotifyLogo from '../assets/Spotify_logo.png';
import Marker from '../assets/marker.png';
import WHG from '../assets/whg.png';
import Journal from '../assets/journal.png';

type Project = {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  icon: string;
};

const projects = [
  {
    id: "spotify-wrapped",
    name: "Spotify Wrapped",
    type: "Web App",
    category: "Full Stack",
    description: "A (non-official) web application that allows users to connect their Spotify account and view their personalized music statistics.",
    features: [
      "Spotify OAuth authentication",
      "Displays top artists and tracks",
      "Spotify API data",
      "Built with full stack web workflow"
    ],
    tech: ["Python", "Django", "JavaScript", "API", "OAuth", "HTML", "CSS"],
    github: "https://github.com/cluong32/SpotifyWrapped",
    icon: SpotifyLogo
  },
  {
    id: "journal",
    name: "Journal App",
    type: "Desktop App",
    category: "Productivity",
    description: "An interactive journal with mood tracking, calendar views, user profiles, authentication, and much more.",
    features: [
      "User login and signup",
      "Mood selector interaction",
      "Calendar-based journal organization",
      "Profile and sidebar navigation",
      "Created dedicated API"
    ],
    tech: ["React", "JavaScript XML", "API", "CSS", "Authentication"],
    github: "https://github.com/cluong32/Interactive-Journal",
    icon: Journal
  },
  {
    id: "atl-food-finder",
    name: "Atlanta Food Finder",
    type: "Web App",
    category: "Full Stack",
    description: "A web application where users can find restaurants in Atlanta, GA via map with search and filters.",
    features: [
      "Search-based restaurant directory",
      "Organized food location data",
      "Designed around local Atlanta food exploration",
      "Cuisine-based filtering"
    ],
    tech: ["Python", "Django", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/cluong32/AtlantaFoodFinder",
    icon: Marker
  },
  {
    id: "hardest-game",
    name: "World's Hardest Game",
    type: "Game",
    category: "Games",
    description: "A C-based video game where the user attempts to traverse levels without failing.",
    features: [
      "Built in C for GBA",
      "Player movement and collision detection",
      "Enemy movement patterns",
      "Used DMA and Mode 3 graphics"
    ],
    tech: ["C", "GBA", "DMA", "Game States"],
    github: "https://github.com/cluong32/worlds-hardest-game",
    icon: WHG
  },
];

const categories = ["All Projects", "Full Stack", "Games", "Productivity"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [history, setHistory] = useState<(Project | null)[]>([null]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const filteredProjects = 
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory);

  function openProject(project: Project) {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(project);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setSelectedProject(project);
  }

  function goBack() {
    if (historyIndex === 0) return;

    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    setSelectedProject(history[newIndex]);
  }

  function goForward() {
    if (historyIndex >= history.length - 1) return;

    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    setSelectedProject(history[newIndex]);
  }

  function changeCategory(category: string) {
    setActiveCategory(category);
    setSelectedProject(null);
    setHistory([null]);
    setHistoryIndex(0);
  }

  return (
    <>
      <div className='finder-window'>
        <aside className='finder-sidebar'>
          <h4>Categories</h4>

          {categories.map((category) => (
            <button
              key={category}
              className={`sidebar-item ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => changeCategory(category)}
            >
              <span>📁</span>
              {category}
            </button>
          ))}
        </aside>

        <div className='finder-main'>
          <div className='finder-toolbar'>
            <div className='finder-nav'>
              <button onClick={goBack} disabled={historyIndex === 0}>
                ‹
              </button>
              <button onClick={goForward} disabled={historyIndex >= history.length - 1}>
                ›
              </button>
            </div>

            <span className='finder-path'>
              Projects/{selectedProject ? `${selectedProject.id}.app` : ""}
            </span>
          </div>

          {!selectedProject ? (
            <>
              <div className='project-file-grid'>
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    className='project-file'
                    onClick={() => openProject(project)}
                  >
                    <div className='file-icon'>
                      <img src={project.icon} alt={project.name} />
                    </div>
                    <span>{project.name}</span>
                  </button>
                ))}
              </div>

              <div className='empty-project-detail'>
                Select a project file to open it.
              </div>
            </>
          ) : (
            <div className='project-detail'>
              <div className='detail-left'>
                <div className='large-file-icon'>
                  <img src={selectedProject.icon} alt={selectedProject.name} />
                </div>

                <div>
                  <h3>{selectedProject.name}</h3>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              <div className='detail-grid'>
                <div>
                  <h4>Features</h4>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Technologies</h4>

                  <div className='project-tech'>
                    {selectedProject.tech.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <a
                    className='github-button'
                    href={selectedProject.github}
                    target='_blank'
                    rel='nonreferrer'
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;