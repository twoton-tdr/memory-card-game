import {useEffect, useState } from 'react'
import './App.css'
import { fetchImg } from './fetchimg';
import { ImgCard } from './components/Imgcard';

function App() {
  const [cardData, setCardData] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImg();
      setCardData(data);
    };

    fetchData();
  }, []);

  if(!cardData){
    return <>Loading</>
  }
  return (
    <div className="container">
      <header>
        <h1>Memory Card Game</h1>
        <nav>
          <div className="score">
            <span style={{fontWeight:400}}>High Score: </span>
            <span style={{fontWeight:600}}>{highScore}</span>
          </div>
          <div className="score">
            <span style={{fontWeight:400}}>Current Score: </span>
            <span style={{fontWeight:600}}>{currentScore}</span>
          </div>
        </nav>
      </header>
      <div className='cards'>
        {cardData && <ImgCard cardData={cardData} setHigh={setHighScore} setCurrent={setCurrentScore} high={highScore} current={currentScore} setCardData={setCardData}></ImgCard>}
      </div>
    </div>
    
  )
  
}

export default App
