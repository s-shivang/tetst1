
// export default function App() {
    
//      let count = 0;

//      function increaseNumber() {

//          count++;
//          const para = document.querySelector('p');
//          para.textContent = `Counter: ${count}`;    
//       }

//       return (
//         <> 
//           <p>Counter: {count}</p>
//           <button onClick={increaseNumber}>Increment</button>
//        </>
//      );
// }

import { useState } from "react";

export default function App() {

    const [count, setCount] = useState(0);

    function increaseNumber() {
        setCount(count+1);
    
    }
    return (
        <>
          <p>Counter: {count}</p>
          <button onClick={increaseNumber}> Increment: {count}</button>
        </>
    );

}