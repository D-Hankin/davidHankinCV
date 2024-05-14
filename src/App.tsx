import { useState, useEffect} from 'react'
import './App.css'
import Home from './home/Home';
import Interests from './interests/Interests';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import Menu from './menu/Menu'
import Portfolio from './portfolio/Portfolio';

interface Repo {
  id: number,
  name: string,
  html_url: string,
  description: string,
  created_at: string,
  languages_url: string
}

function App() {

  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState("home");
  const [trimmedAndSortedRepos, setTrimmedAndSortedRepos] = useState<Repo[]>([]);
  const [repoLanguages, setRepoLanguages] = useState<{ [key: string]: { [key: string]: string | null } }>({});

  const fetchAddress: string = "https://api.github.com/users/D-Hankin/repos";    
    
    const updateRepos = async () => {
        try {
            const response = await fetch(fetchAddress, {
                headers: {
                    "User-Agent": "D-Hankin",
                    "Accept": "application/vnd.github+json",
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error("Bad network response.");
            }
            const data : Repo[] = await response.json();
            setRepos(data);
        } catch (error) {
            console.error('There was a problem fetching the repos:', error);
        }
    };

    useEffect(() => {
        updateRepos();
    }, []); 

    useEffect(() => {
        setTrimmedAndSortedRepos([...repos].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
    }, [repos]);
  
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

  useEffect(() => {
    const fetchLanguages = async () => {
        const languagesData: { [key: string]: { [key: string]: string | null } } = {};

        for (const repo of repos) {
            try {
                const response = await fetch(repo.languages_url, {
                    method: "GET",
                    headers: {
                        "User-Agent": "D-Hankin",
                        "Accept": "application/vnd.github+json",
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error("Bad network response.");
                }
                const data = await response.json();
                const percentages = parseLanguages(data);
                languagesData[repo.id.toString()] = percentages;
            } catch (error) {
                console.error(`Error fetching languages for ${repo.name}:`, error);
                languagesData[repo.id.toString()] = { error: 'Error fetching languages' };
            }
        }

        setRepoLanguages(languagesData);
    };

    const parseLanguages = (languages: { [key: string]: number }): { [key: string]: string | null } => {
      const totalLines: number = Object.values(languages).reduce((sum, value) => sum + value, 0);
      const percentages: { [key: string]: string | null } = {};

      for (const [language, lines] of Object.entries(languages)) {
          percentages[language] = ((lines / totalLines) * 100).toFixed(2) + '%';
      }

      return percentages;
  };

    if (repos.length > 0) {
        fetchLanguages();
    }
}, [repos]);

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
          { page === "portfolio" ? <Portfolio repos={trimmedAndSortedRepos} repoLanguages={repoLanguages}/> : null }
          { page === "experience" ? <Experience /> : null }
          { page === "contact" ? <Contact /> : null }
        </div>
      </div>
    </>
  )
}

export default App
