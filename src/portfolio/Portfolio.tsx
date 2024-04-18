import GetRepos from "./getRepos/GetRepos"
import "./portfolio.css"

function Portfolio() {
  return (
    <div id="contentPortfolio">
        <h2>Nuvarande publika GitHub-repos</h2>
        <GetRepos />
    </div>
  )
}

export default Portfolio