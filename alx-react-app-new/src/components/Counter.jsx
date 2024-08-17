import { useState } from 'react';

function Counter () {
	//Implement State using useState
  const [count, setCount] = useState(0);

	return(
            <div class="button">
		<p>Current count: {count}</p>

               <button onClick= {() => setCount(count +1)}>Increment</button>
		<button onClick= {() => setCount(count-1)}>Decrement</button>
		<button onClick= {() => setCount(0)}>Reset</button>
		</div>
	);
}
export default Counter;
