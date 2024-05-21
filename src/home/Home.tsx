import "./home.css";
import profilePic from '../images/profilePic.jpg';

function Home() {
  return (
   
      <div id="contentHome">
        <div id="contentLeft">
          <h2>Motivering...</h2>  
          <p> Med över ett decennium av yrkeserfarenhet har jag utvecklat en gedigen kompetens och en bevisad förmåga att anpassa mig och lyckas i olika miljöer. Genom hela 
              min karriär har jag visat ett starkt ledarskap, god problemlösning- och kommunikationsförmåga och därmed konsekvent drivit projekt till framgång.<br/><br/>
              Under de senaste två åren har jag gått en intensiv utbildning inom Java-utveckling med tydligt fokus på fullstackutveckling för att anpassa mig till aktuella 
              branschtrender. Denna utbildning har varit omfattande och med praktisk erfarenhet inom både Java-programmering och fullstackutveckling, vilket har rustat mig 
              med de färdigheter och den kunskap som krävs för att lyckas i dagens dynamiska programmeringslandskap.<br/><br/>Som en mycket motiverad och anpassningsbar 
              individ trivs jag i dynamiska miljöer och av att samarbeta, både inom ett team och tillsammans med andra team, detta för att uppnå det gemensamma mål. Jag ser 
              med spänning fram emot möjligheten att utnyttja mina färdigheter och bidra till innovativa projekt inom programmeringsmiljön.</p>
          <h3>Mina styrkor...</h3>
          <ul id="strengthsList">
            <li>Problemlösning - att på ett kreativt och effektivt sätt hantera problem för att nå bästa resultat.</li>
            <li>Anpassning till olika roller - att kunna leda och fördela arbete i en grupp vid behov samt att följa andras ledarskap för att uppnå bästa resultat i projektet.</li>
            <li>Arbetsmoral - oavsett uppgift är jag alltid beredd att ta ansvar för att slutföra den för att uppnå bästa resultat..</li>
            <li>Kreativ - att kunna designa och utveckla mina egna idéer är oerhört givande.</li>
            <li>Kommunikation - förmågan att inte bara tydligt kommunicera mina idéer eller feedback till andra utan även att ta till sig information från andra.</li>
          </ul>
        </div>
        <div id="imageDiv">
        <img id="profilePic" src={profilePic} alt="Profile Picture" title="En promenad i snön"></img>
        </div>
      </div>
  )
}

export default Home