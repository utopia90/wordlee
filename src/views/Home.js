import React from 'react'
import Board from '../components/Board/Board'
import Line from '../components/Line/Line'
import './home.css'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import keySound from '../assets/sounds/key.mp3'
import drumsSound from '../assets/sounds/drums.mp3'
import finalDrums from '../assets/sounds/finaldrums.mp3'
import Modal from '../components/Modal/Modal'





export default function Home() {
  const [randomWord, setRandomWord] = React.useState('')
  let [guess, setGuess] = React.useState('')
  const [colors, setColors] = React.useState([])
  const [wordChecked, setWordChecked] = React.useState('')
  const [wordIsCorrect, setWordIsCorrect] = React.useState(false)



  const [guessesHistoric, setGuessesHistoric] = React.useState([])
  const [colorsHistoric, setColorsHistoric] = React.useState([])


  const checkIfWordIsCorrect = () => {
    if (wordIsCorrect) return;

    if (randomWord === guess) {
      const audio = new Audio(finalDrums);
      audio.play()
      setColors(['green', 'green', 'green', 'green', 'green'])
      setWordIsCorrect(true)
    } else {
      randomWord.slice().split('').forEach((word, i) => {
        if (guess.charAt(i) === word) {
          setColors(prevColors => [...prevColors, 'green'])
        } else {
          if (randomWord.includes(guess.charAt(i))) {
            setColors(prevColors => [...prevColors, 'yellow'])
          } else {
            setColors(prevColors => [...prevColors, 'grey'])
          }
        }
      })
    }
    setWordChecked(true)
  }
  React.useEffect(() => {
    const WORD_API_URL = 'https://random-word-api.herokuapp.com/word?length=5'

    const fetchRandomWord = async () => {
      const response = await fetch(WORD_API_URL)
      const randomWord = await response.json()

      if (randomWord && randomWord.length > 0) {
        setRandomWord(randomWord[0])
      }
    }
    fetchRandomWord()
  }, [])


  React.useEffect(() => {
    const handleKeyUp = (e) => {
      if (wordIsCorrect) return;

      const key = e.key;
      const abc = 'abcdefghijklmnopqrstuvwxyz';


      if (abc.includes(key) && guess.length < 5) {
        const audio = new Audio(keySound);
        audio.play()
        const newGuess = guess + key
        setGuess(newGuess);
      } else if (key === 'Backspace') {
        setGuess(prev => prev.slice(0, -1))
      } else if (key === 'Enter' && guess.length === 5) {
        const audio = new Audio(drumsSound);
        audio.play()
        setTimeout(() => {
          checkIfWordIsCorrect();
        }, 200)
      }
    }
    if (wordChecked) {
      setGuessesHistoric(prev => [...prev, guess]);
      if (colors?.length === 5) {
        setColorsHistoric(prev => [...prev, [...colors]]);
      }
      setGuess('');
      setColors([]);
      setWordChecked(false)
    }

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, [guess, colors, wordChecked]);

  return (
    <>
    <Modal openModal={wordIsCorrect} message={'Hoooraaaay! You won! '} onClose={() => window.location.reload()}/>

    <div className='mainContainer'>
      <div className='boardContainer'>
          <Board>
          <h2 className='title'>Glyph</h2>
            {[...Array(6)].map((arr, i) =>
              <Line guess={guessesHistoric.length === i ? guess : guessesHistoric[i] || null} colors={colorsHistoric?.length >= i ? colorsHistoric[i] : null} />
            )}
           <SocialMedia/>
          </Board>
      </div>
        <div className="instructions-container">
          <h2>Instructions:</h2>
          <p> <strong>Goal</strong>: Guess a hidden five-letter word within six tries. <br></br>

            * <strong>First Guess:</strong> Type any five-letter word and press "Enter."<br></br>

            <strong>Feedback Colors:</strong><br></br>

            <strong style={{ color: 'green' }}>Green:</strong> The letter is in the word and in the correct position.<br></br>
            <strong style={{ color: 'yellow' }}>Yellow:</strong> The letter is in the word but in the wrong position.<br></br>
            <strong style={{ color: 'gray' }}>Gray:</strong> The letter is not in the word at all.<br></br>
            <strong>Continue Guessing:</strong>  Use the feedback from your guesses to make informed guesses.<br></br>

            <strong>Win: </strong>If you guess the word within six attempts, you win!<br></br>

            Share Your Results: You can share your results after playing.<br></br>

            <strong>Tips</strong><br></br>
            * Start with common letters.<br></br>
            * Pay attention to the letters you've already guessed.</p>
        </div>
      </div>
      </>
  )
}
