/*
useCallback hook help us to prevent unnecessary renders and hence gain performance boost. Here we can cache the function
to avoid its recreation wheres on useMemo we cache the result of running that function

Since functions are reinitialized after every rerender, we can avoid this and initialize them based on the dependency
value
*/

import { useCallback, useState } from 'react';

function useCallbackExample() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [count])
  const increment2 = useCallback(() => {
    setCount2((prevCount)=>prevCount + 1)
  }, [count2])
  return (
    <>
      <h1>useCallback example</h1>
      <h3>count1: {count}</h3>
      <h3>count2: {count2}</h3>
      <button className="btn btn-primary" onClick={increment} >change counter1</button>
      <button className="btn btn-primary" onClick={increment2}>change counter2</button>
    </>
  )
}

export default useCallbackExample
