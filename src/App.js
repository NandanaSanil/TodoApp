import React from 'react'
import './App.css';
import Todo from './Todoapp/Todo';

function App() {
  return (
    <div>
        <Todo />
    </div>
  )
}

export default App




// import { useState } from 'react';
// import './App.css';
// import Employee from './Employee';
//import Counter from './Counter';


// function App() {
//   const [count,setCount]=useState(0)
//   const addCount=()=>{
//     setCount(count+1)
//   }
  // let obj={
  //   title:'1st Counter',
  //   count,
  //   place:'tvm'
  // }
  // let emp=[{name:'NK',age:20},
  //   {name:'SJ',age:21},
  //   {name:'EM',age:22},
  // ]
  // return (
  //   <div className="App">
   
    
    // <h1>{count}</h1>
    // <button onClick={addCount}>Add</button>
    // {/* <Counter {...obj}/>
    // <Counter title="2nd Counter" count={count}/> */}
//     {
//       emp.map((obj,index)=>
//           <Employee key={index} {...obj}/>
      
//       )
//     }
 
//     </div>
//   );
// }

// export default App;

