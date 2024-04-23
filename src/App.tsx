import { useState, useEffect} from 'react'
import './App.css'
import Home from './home/Home';
import Interests from './interests/Interests';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import Menu from './menu/Menu'
import Portfolio from './portfolio/Portfolio';

function App() {

  const [page, setPage] = useState("");
  
  useEffect(() => {
  
    let pageUrl: string = page;

    if (!pageUrl) {
      const queryParameters: URLSearchParams = new URLSearchParams(window.location.search);
      const getUrl: string | null = queryParameters.get("page");
  
      if(getUrl) {
        pageUrl = getUrl;
        setPage(getUrl) 
      } else {
        pageUrl = "home";
      }
    }

    window.history.pushState(
      null, 
      "",
      "?page=" + pageUrl
    )
  }, [page])

  const updatePage = (newPage: string) => {
    setPage(newPage);
  }

  return (
    <>
      <h5>(Jag är skriven i Typescript/React. Kika i repot här: <a id="githubLink" href='https://github.com/D-Hankin/davidHankinCV' target='_blank'>Github</a>)</h5>
      <h1>David Hankin CV</h1>
      <div id='contentDiv'>
        <div id="leftDiv">
          <Menu updatePage={updatePage} page={page} />
        </div>
        <div id="rightDiv">
          { page === "home" ? <Home /> : null }
          { page === "interests" ? <Interests /> : null }
          { page === "portfolio" ? <Portfolio /> : null }
          { page === "experience" ? <Experience /> : null }
          { page === "contact" ? <Contact /> : null }
        </div>
      </div>
    </>
  )
}

export default App
