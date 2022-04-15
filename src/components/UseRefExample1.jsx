import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  }
  return <>
    <h1>useRef for accessing the DOM nodes or React elements</h1>
    <input type="text" className="form-control" ref={inputRef} />
    <button className='btn btn-primary' onClick={focusInput}>focus text input</button>
  </>;
}

export default UseRefExample1;
