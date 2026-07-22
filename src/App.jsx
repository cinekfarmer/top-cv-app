import { useState } from 'react'
import Input from './components/Input.jsx'
import Output from './components/Output.jsx'
import './App.css'

function App() {
  const [general, setGeneral] = useState({name:'Marek',email:'email@e.mail',phone:123222321});
  const [education, setEducation] = useState({school:'Lorem', study:'Impsum', date:'2001-09-11'});
  const [experience, setExperience] = useState(
    {company:'Szlachta Nie Pracuje sp. z o.o.', position:'Plebejusz', responsibilities:['watching people', 'watching children', 'watching paper', 'and a lot more...'], startingDate:'21', endingDate:'37'}
  );

  return (<>
    <Input general={general} setGeneral={setGeneral} education={education} setEducation={setEducation}
      experience={experience} setExperience={setExperience}></Input>
    <Output general={general} education={education} experience={experience}></Output>
  </>)
}

export default App
