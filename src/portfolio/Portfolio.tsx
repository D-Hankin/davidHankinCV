import GetRepos from "./getRepos/GetRepos"
import "./portfolio.css"

function Portfolio() {
  return (
    <div id="contentPortfolioOuter">
      <div id="contentPortfolio">
          <h2>Nuvarande publika GitHub-repos</h2>
      </div>
          <GetRepos />
    </div>
  )
}

export default Portfolio