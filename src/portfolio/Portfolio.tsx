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
  repos: Repo[];
}

function Portfolio(props: Props) {
  return (
    <div id="contentPortfolioOuter">
      <div id="contentPortfolio">
          <h2>Nuvarande publika GitHub-repos</h2>
      </div>
          <GetRepos repos={props.repos}/>
    </div>
  )
}

export default Portfolio