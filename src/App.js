import Question from './components/Question';
import { useState } from 'react';
import './App.css';
import Data from './Data'


function App() {
  const [data, setData] = useState(Data[0]);
  const [qCount, setQCount] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  function onRadioSelect(e) {
    const value = e.target.value;
    setSelectedAnswer(value);
  }
  
  function submitClick() {
    if (selectedAnswer !== "") {
      if (data.answer === selectedAnswer) {
        setScore(score + 1);
        setSelectedAnswer("");
      }
      if (qCount <= 4) {
        setQCount(qCount + 1);

        setData(Data[qCount]);


      } else {
        setShowScore(true);
      }
    }
    else {
      alert("please select the Answer !!!")
    }
  }


  return (
    <div className='w-screen h-screen bg-gradient-to-r from-[#b1ffcf] to-white'>
      <div className='w-full h-full pt-[120px] tracking-wide' >
        <div className='w-[500px] h-[410px] bg-slate-700 text-white m-auto p-6 rounded'>
          <h1 className='text-center text-5xl font-bold pb-4'>Quiz App</h1>
          {!showScore && <Question submitClick={submitClick} onRadioSelect={onRadioSelect} data={data} selectedAnswer={selectedAnswer}/>}
          {showScore && <div>
            <h3 className='text-3xl py-2 font-bold'>Result</h3>
            <h3 className='text-xl py-1 font-semibold'>Score: {score}</h3>
          </div>}
        </div>
      </div>

    </div>
  );
}

export default App;
