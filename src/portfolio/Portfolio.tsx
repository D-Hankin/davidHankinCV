import GetRepos from "./getRepos/GetRepos"
import "./portfolio.css"

interface Repo {
  id: number,
  name: string,
  html_url: string,
  description: string,
  created_at: string,
  languages_url: string
}

interface Props {
  repos: Repo[],
  repoLanguages: { [key: string]: { [key: string]: string | null } }
}

function Portfolio(props: Props) {
  return (
    <div id="contentPortfolioOuter">
      <div id="contentPortfolio">
          <h2>Nuvarande publika GitHub-repos</h2>
      </div>
          <GetRepos repos={props.repos} repoLanguages={props.repoLanguages}/>
    </div>
  )
}

export default Portfolio