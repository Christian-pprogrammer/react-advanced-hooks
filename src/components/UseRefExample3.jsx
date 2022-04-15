/* memory leak issue happens when we update state while component has been unmounted */

import { useRef, useState, useEffect } from 'react'

function UseRefExample3() { 
  const [showComponent, setShowComponent] = useState(true)
  return (
    <>
      {showComponent && (<ToggledComponent />)}
      <button className="btn btn-primary" onClick={()=>{setShowComponent(!showComponent)}}>Toggle</button>
    </>
  )
}

function ToggledComponent() {
  const [value, setValue] = useState('');
  const isMounted = useRef(true);
  useEffect(() => {
    console.log(isMounted.current)
      setTimeout(() => {
        if(isMounted.current) {
          setValue('hello');
        }
      }, 3000);
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <h1>useRef to prevent memory leak issue</h1>
      <h3>value comes after 3 seconds: {value}</h3>
    </>
  );
}

export default UseRefExample3
