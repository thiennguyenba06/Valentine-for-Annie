import { useState } from 'react'
import './App.css'

const phrases = [
  "No 🙉",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Pookie Please🥺",
  "Don't do this to me🫤",
  "I'm gonna cry..😭",
  "You are breaking my heart😭💔",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          {/* <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" /> */}
          <img src="https://tenor.com/view/bebe-rub-back-r-ub-massage-gif-15145097" alt="quat" />
          <div className='text'>Yayyy, Let's QUẤT !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(248, 229, 89)'}}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
