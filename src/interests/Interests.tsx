import "./interests.css"
import hemma from "../images/hemma.png";
import aventyr from "../images/aventyr.png";
import film from "../images/film.png"; 
import musik from "../images/musik.png";


function Interests() {
  return (
    <div id="contentInterests">
      <p>En varm kväll på Australiens östkust, träffade jag min sambo sedan 15 år tillbaka. Det var där jag beslöt mig för att flytta till Sverige. Att flytta till ett 
        annat land var för mig inget främmande eftersom jag har rest och arbetat mycket utomlands och faktiskt inte bott i mitt hemland, England, sedan 2007. Under mina år 
        fram till idag i Sverige har jag och min sambo besökt några fantastiska länder och platser som Madagaskar och Galapagosöarna, samtidigt som jag har studerat 
        astrofysik på distans vid ett engelskt universitet.<br/><br/> För några år sedan kände jag och min sambo att våra muskler och vårt psyke inte var lika energiska 
        som tidigare och vi tyckte att det var dags att varva ner lite och börja etablera oss mer permanent i Sverige. Vi köpte ett hus på sydkusten och skaffade vår 
        älskade hund, en engelsk setter som heter Ozzy. För två år sedan fick vi barn, Otto, som nu växer och växer och pratar och pratar och gör livet lyckligare för 
        varje dag. Vi bor fortfarande i huset vid kusten och delar vår fritid mellan Otto, Ozzy och våra höns. Vi har dock inte lyckats med planen att varva ner.</p>
        <div id="interestsImgsDiv">
          <img className="interestsImgs" src={ hemma }/>
          <img className="interestsImgs" src={ aventyr } />
          <img className="interestsImgs" src={ film } />
          <img className="interestsImgs" src={ musik } />
        </div>
    </div>
  )
}

export default Interests