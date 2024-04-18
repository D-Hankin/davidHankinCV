import "./home.css";
import profilePic from '../images/profilePic.jpg';

function Home() {
  return (
   
      <div id="contentHome">
        <div id="contentLeft">
          <h2>Motivering...</h2>  
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae magna eu nulla cursus rutrum. Integer eget nisi velit. 
              Cras mattis sapien nec ipsum molestie, non convallis dui lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae magna eu nulla cursus rutrum. Integer eget nisi velit. 
              Cras mattis sapien nec ipsum molestie, non convallis dui lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae magna eu nulla cursus rutrum. Integer eget nisi velit. 
              Cras mattis sapien nec ipsum molestie, non convallis dui lacinia.</p>
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