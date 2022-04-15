/* */
import { useRef, useState, useEffect } from 'react';

function UseRefExample2() {
  const [name, setName] = useState('');
  const prevNameRef = useRef('');

  useEffect(()=>{
    prevNameRef.current = name;
  }, [name])

  return (
    <>
      <h1>Storing reference to the previous state value</h1>
      <h3>previous name value: {prevNameRef.current}</h3>
      <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default UseRefExample2
