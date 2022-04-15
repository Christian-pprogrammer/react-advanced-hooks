/*
  Actually this is not the best way to access previous state value since it is prone to errors
  To understand these errors, we need to first understand how this whole program is executing

  1) user types in something and we run onChange event updating name state to what user types in
  2) After we rerender the component and here the prevNameRef is still holding initial value
  3) After rerender, since the name have changed, we run callback in useEffect setting prevNameRe.current
  to new name
  4) Since useRef change doesn't trigger rerender, we will be seeing the previous name
  but actually the prevNameRef.current is holding the state value

  Drawbacks of this technique

  As we saw, as the prevNameRef.current holds current state value but shows the previous state value,
  if there was another state in same component, and it change, this would lead to component rerender
  hence making the prevNameRef.current to show current value instead of previous value

  How to overcome this

  we would set the prevName.current to the current state value with in the onClick before changing the name(
    before calling setName 
  ) instead of using useRef
  ex 
  <input type='text' className='form-control' onChange={(e)=>{
    prevName.current = name;
    setName(e.target.value)
  }} />
*/
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
