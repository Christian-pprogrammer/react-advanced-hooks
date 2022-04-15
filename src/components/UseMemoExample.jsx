/* useMemo is a memoization function which caches the returned value of an expensive function
the goal is to run the expensive function only after the first render or when inputValue changes
not on each rerender when state data changes or the props changes

Firstly without useMemo used, when i always changed the state the expensive function run setting
expensiveValue to the calculated value since the variable in component is reinitialized in react.
To avoid this, i will cache the value returned by expensiveFunction  so that when it returns same 
value, it means it doesn't change and i will not need to run expensiveFunction
*/
import { useMemo, useState } from 'react';

function UseMemoExample() {
  const [value, setValue] = useState(0);
  const expensiveValue = useMemo(()=>{
    return expensiveFunction(value);
  }, [value]);
  const [testValue, setTestValue] = useState(0);
  return (
    <>
      <h1>useMemo hook</h1>
      <input type="number" value={value} className="form-control" onChange={(e) => setValue(e.target.value)} />
      <h3>{value} * 10000 = {expensiveValue}</h3>
      <h3>test value {testValue}</h3>
      <button className='btn btn-primary' onClick={()=>setTestValue((value)=>value + 1)}>change test value</button>
    </>
  )
}

const expensiveFunction = (value) => {
  console.log('run expensive function');
  return value * 10000;
}

export default UseMemoExample
