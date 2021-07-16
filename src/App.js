import React, {useState} from 'react'
import './App.css';
import BtnComponents from './Components/BtnComponents';
import DisplayComponents from './Components/DisplayComponents';

function App() {
  const [time,  setTime] = useState({ms:0, s:0, m:0, h:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  const start = () =>{
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }
  const run =()=>{
  if(updatedMs === 100){
    updatedS++
    return updatedMs = 0
  }
  if(updatedS === 60){
    updatedM ++
    return updatedS = 0
  }
if(updatedM === 60){
  updatedH ++
  return updatedM =0
}
updatedMs ++
return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
}
 const reset = ()=>{
   clearInterval(interv)
   setStatus(0)
   setTime({ms:0, s:0, m:0, h:0})
 }

  const stop = ()=>{
    clearInterval(interv)
    setStatus(2)
  }

  const resume =()=>{
    start()
  }
   

  return (
    <div className="App">
    <h1 className="heading">Stopwatch</h1>
    <DisplayComponents time = {time}/>
    <BtnComponents start={start} reset={reset} stop={stop} resume={resume} status={status}/>
    </div>
  );
}

export default App;
