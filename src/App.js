import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import cat1 from './img/1296104.png'
import cat2 from './img/600px-Cat_silhouette.svg.png'
import cat3 from './img/hg-cat-4.png'

function App() {
  const [catFact, setCatFact] = useState("")

  const generateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }

  useEffect(() =>{
    generateCatFact();
  }, [])
 
  return (
    <div className="App">
      <div className='fact-box'>
        <p className='fact-text'>{catFact}</p>
        <button 
          className='fact-btn' 
          onClick={generateCatFact}
          >
            Generate Cat Fact
        </button>
        <p>@2023 by CungCaiLin</p>

        <img className='cat3' src={cat3} alt="" srcset="" />
        <img className='cat1' src={cat1} alt="cat" srcset="" />
        <img className='cat2' src={cat2} alt="cat" srcset="" />
      </div>
    </div>
  );
}

export default App;
