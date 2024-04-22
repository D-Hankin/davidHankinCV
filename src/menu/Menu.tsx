import './menu.css'
import arrowRight from '../images/arrowRight.png'

interface Props {
   updatePage: (page: string) => void;
   page: string
}

function menu(props: Props) {

  return (
    <nav>
      <ul id="menuUl">
        <div className='liDiv' id="menuHome" onClick={() => props.updatePage("home")}>
            <li className="menuLi">Hem</li>
            { props.page === "home" ? <img className="arrowImg" src={ arrowRight }/> : <div className="arrowImg"/> }
        </div>
        <div className='liDiv' id="menuInterests" onClick={() => props.updatePage("interests")}>
            <li className="menuLi">Om mig</li>
            { props.page === "interests" ? <img className="arrowImg" src={ arrowRight }/> : <div className="arrowImg"/> }
        </div>
        <div className='liDiv' id="menuPortfolio" onClick={() => props.updatePage("portfolio")}>
            <li className="menuLi">Portfolio</li>
            { props.page === "portfolio" ? <img className="arrowImg" src={ arrowRight }/> : <div className="arrowImg"/> }
        </div>
        <div className='liDiv' id="menuExperience" onClick={() => props.updatePage("experience")}>
            <li className="menuLi">Erfarenhet</li>
            { props.page === "experience" ? <img className="arrowImg" src={ arrowRight }/> : <div className="arrowImg"/> }
        </div>
        <div className='liDiv' id="menuContact" onClick={() => props.updatePage("contact")}>
            <li className="menuLi">Kontakt</li>
            { props.page === "contact" ? <img className="arrowImg" src={ arrowRight }/> : <div className="arrowImg"/> }
        </div>
      </ul>
    </nav>
  )
}

export default menu