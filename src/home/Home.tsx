import "./home.css";
import profilePic from '../images/profilePic.jpg';

function Home() {
  return (
   
      <div id="contentHome">
        <div id="contentLeft">
          <h2>Motivering...</h2>  
          <p> Med över ett decennium av yrkeserfarenhet för jag med mig en gedigen kompetens och en bevisad förmåga att anpassa mig och lyckas i olika miljöer. Genom hela min 
              karriär har jag visat starkt ledarskap, problemlösningsförmåga och god kommunikationsförmåga, och konsekvent drivit projekt till framgång.<br/><br/>Under de 
              senaste två åren har jag varit med i en intensiv tvåårig kurs inom Java-utveckling med tydligt fokus på fullstackutveckling för att anpassa mig till 
              aktuella branschtrender. Denna kurs erbjöd omfattande utbildning och praktisk erfarenhet inom både Java-programmering och fullstackutveckling, vilket har rustat mig 
              med de färdigheter och den kunskap som krävs för att lyckas i dagens dynamiska programmeringslandskap.<br/><br/>Som en mycket motiverad och anpassningsbar individ 
              trivs jag i dynamiska miljöer och njuter av att samarbeta, både inom ett team och i samband med andra teams, för att uppnå gemensamma mål. Jag ser med spänning fram 
              emot möjligheten att utnyttja mina färdigheter och bidra till innovativa projekt inom vilken programmeringsmiljö som helst.</p>
          <h3>Mina styrkor...</h3>
          <ul id="strengthsList">
            <li>Problemlösning - att kunna titta på både detaljer eller helheten och hitta vägen till bästa resultat.</li>
            <li>Anpassning till olika roller - kan leda en grupp där det behövs men redo att låta andra leda där det är bäst för projektet.</li>
            <li>Arbetsmoral - oavsett uppgift är jag alltid beredd att slutföra den efter bästa förmåga.</li>
            <li>Kreativ - att designa och utveckla mina egna idéer är oerhört givande.</li>
            <li>Kommunication - Förmågan att inte bara tydligt kommunicera mina idéer eller feedback till andra utan också ta till sig information från andra.</li>
          </ul>
        </div>
        <div id="imageDiv">
        <img id="profilePic" src={profilePic} alt="Profile Picture" title="En promenad i snön"></img>
        </div>
      </div>
  )
}

export default Home