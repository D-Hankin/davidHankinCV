import "./experience.css";

function Experience() {
  return (
    <div id="contentExperience">
      <div id="leftSideDiv">
        <h2 className="experienceH2">ArbetsHistorik</h2> 
        <table className="experienceTable">
          <tbody>
          <tr>
              <td><h5>2023-</h5></td>
              <td>
                  <h3>Postnord AB<br/>Produktionschef</h3>
                  <p>Ansvar för paketterminalens produktion dagligen men även långsiktig med tanke på stora projekt och händelser. Ansvar för sex arbetsledare med sammanlagt ca 80 arbetare.</p>
              </td>
            </tr>
            <tr>
              <td><h5>2018-2022</h5></td>
              <td>
                  <h3>Postnord AB<br/>Processledare</h3>
                  <p>Fokus på företagets logistiska processer. Ansvar för planering och tillsyn av ankomst och avgång av gods till och från terminalen. Kontakt med företagskunder för att planera ankomster eller lösa logistiska problem. Säkerhetsansvar med fokus på förare, arbetsplats och logistiska frågor.</p>
              </td>
            </tr>
            <tr>
              <td><h5>2012-2018</h5></td>
              <td>
                  <h3>Postnord AB<br/>Produktionsledare</h3>
                  <p>Planering och genomförande av den dagliga produktionen på paketterminalen med fokus på personal men även överblick över de logistiska processerna. Ansvarig för ett 70-tal arbetare dagligen tillsammans med fyra andra.</p>
              </td>
            </tr>
            <tr>
              <td><h5>2010-2012</h5></td>
              <td>
                  <h3>Postnord AB<br/>Terminalarbetare</h3>
                  <p>Mitt första arbete efter flytten till Sverige. Mycket fysiskt arbete där man lossade och lastade släp.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="rightSideDiv">
        <h2 className="experienceH2">Utbildning</h2>
        <table className="experienceTable">
          <tbody>
          <tr>
              <td><h5>2023-2025</h5></td>
              <td>
                  <h3><a className="experienceLinks" href="https://ju.se/studera/valj-utbildning/yh-utbildning/yh-program/javautvecklare.html" target="_blank">Campus Värnamo (Jönköping University)<br/>
                  Yrkeshögskolautbildning: Javautveckling</a></h3>
                  <p>Programmering med inriktning på java men även grundläggande utbildning i HTML, Javascript, Typescript, SQL & noSQL och andra verktyg för att kunna arbeta 
                    i en fullstack arbetsmiljö.</p>
              </td>
            </tr>
            <tr>
              <td><h5>2024 (ST)</h5></td>
              <td>
                  <h3>Komvux</h3>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/webbserverprogrammering-1/" target="_blank">Webbserverprogrammering 1 (PHP)</a></p>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/digitalt-skapande-1/" target="_blank">Digitalt skapande 1</a></p>
              </td>
            </tr>
            <tr>
              <td><h5>2022-2023</h5></td>
              <td>
                  <h3>Komvux</h3>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/programmering-1/" target="_blank">Programmering 1</a> - slutbetyg A</p>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/programmering-2/" target="_blank">Programmering 2</a> - slutbetyg B</p>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/webbutveckling-1/" target="_blank">Webbutveckling 1</a> - slutbetyg B</p>
                  <p><a className="experienceLinks" href="https://nti.se/komvux-pa-distans/natverkssakerhet/" target="_blank">Nätverkssäkerhet</a> - slutbetyg B</p>
              </td>
            </tr>
            <tr>
              <td><h5>2012-2016</h5></td>
              <td>
                  <h3>The Open University<br/>Högskoleexamen: Astrofysik</h3>
                  <p>En tvåårig kurs studerad i 50% takt samtidigt som jag arbetat heltid. Avancerad matematik och fysik med fokus på astrofysik. Det slutliga projektet var att fastställa ljuskällan för ett oidentifierat pulserande himlaobjekt med fjärråtkomst till ett teleskop i Tyskland.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Experience