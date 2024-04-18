import { useState } from "react"
import "./contact.css"

function Contact() {

  const [showNumber, setShowNumber] = useState<Boolean>(false)

  const handleClick = (showNumber: Boolean) => {
    if (showNumber) {
      setShowNumber(false);
    } else {
      setShowNumber(true);
    }
  }

  return (
    <div id="contentContact">
      <table id="contactTable">
        <tbody>
            <tr>
              <td><img className="contactIcons" src="src\images\phone.png"/></td>
              { showNumber ? <td id="phoneTd">+46736358129</td> : <td id="phoneTd">+467XXXXXXXX</td> }
              <td><button id="showNumButton" onClick={() => handleClick(showNumber)}>Visa</button></td>
            </tr>
          <tr>
            <td><img className="contactIcons" src="src\images\email.png"/></td>
            <td><a className="contactLinks" href="mailto:d_hankin@outlook.com">d_hankin@outlook.com</a></td>
          </tr>
          <tr>
            <td><img className="contactIcons" src="src\images\linkedIn.png"/></td>
            <td><a className="contactLinks" href="https://linkedin.com/in/david-hankin-704a8428b" target="_blank">LinkedIn</a></td>
          </tr>
          <tr>
            <td><img className="contactIcons" src="src\images\github.png"/></td>
            <td><a className="contactLinks" href="https://github.com/D-Hankin" target="_blank">GitHub</a></td>
          </tr>
          <tr>
            <td><img className="contactIcons" src="src\images\location.png"/></td>
            <td><a className="contactLinks" href="https://www.google.com/maps/place/231+79+Smyge/@55.3469013,13.3211366,13.25z/data=!4m15!1m8!3m7!1s0x46537bbd6b1d15d7:0x645a3a32c863813c!2s231+79+Smyge!3b1!8m2!3d55.35!4d13.366667!16s%2Fg%2F1w15y163!3m5!1s0x46537bbd6b1d15d7:0x645a3a32c863813c!8m2!3d55.35!4d13.366667!16s%2Fg%2F1w15y163?entry=ttu" target="_blank">Smyge</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contact