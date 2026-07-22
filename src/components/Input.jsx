function testFunction(ominousParameter, setGeneral){
  setGeneral(prev => ({...prev, name:ominousParameter}));
}

export default function Input({general, setGeneral}) {
  const newName = 'Welcome the new brave world!'

  return <button type="button" onClick={() => testFunction(newName, setGeneral)}>Click me!</button>
}
