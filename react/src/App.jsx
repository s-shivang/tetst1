
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

// import { useState } from "react";

// export default function App() {

//     const [count, setCount] = useState(0);

//     function increaseNumber() {
//         setCount(count+1);
    
//     }
//     return (
//         <>
//           <p>Counter: {count}</p>
//           <button onClick={increaseNumber}> Increment: {count}</button>
//         </>
//     );

// }

import {useState} from 'react';

export default function App() {

    const [users, setUser] = useState([]);

    async function githubProfile() {

        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUser(data);
        console.log(data);
    }

    githubProfile();

    return (
        <>
          <h1>Github Users</h1>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px"}}>
            {
               users.map(user =>(
                 <img src={user.avatar_url} height={100} width={100}/>
                     )
                )
            }
             </div>
        </>
    );
}