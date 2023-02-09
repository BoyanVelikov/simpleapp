import React from "react";
import { useEffect } from "react";
import './App.css';
// import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}?t=${title}`);
    const data = await response.json();

    console.log(data.Search);
    // console.log(data);
    // console.log(data);
    
  };

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
        placeholder="Search for movies"
        value="Superman"
        onChange={() => {}}
       />
       <img
      //  src={SearchIcon}
       alt="search"
       />
      </div>
    </div>
  )
}

export default App;

// import {useState, useEffect} from 'react';
// import './App.css';



// // const Person = (props) => {
// //   return (
// //     <>
// //     <h1>Name: {props.name}</h1>
// //     <h2>Last Name: {props.LastName}</h2>
// //     <h2>Age: {props.age}</h2>
// //     </>
// //   )
// // };

// const App = () => {

//   const [counter, setCounter] = useState(0);
//   // const name = 'Jane';
//   // const isNameShowing = true;

//   useEffect(() => {
//     // alert("Reload");
//     alert("You've changed the counter to " + counter);
//     setCounter(100);
//   },[counter]);

//   return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
//       {/* <Person name='John' LastName='Doe' age={25}/>
//       <Person name='Marry' LastName='Doe' age={25}/> */}
//       {/* <Person/>
//       <Person/>
//       <Person/> */}
//       {/* <h1>Hello, {2 + 2}</h1> */}
//       {/* {name ? (
//         <>
//         <h1>{name}</h1>
//         </>
//       ):
//       (
//         <>
//         <h1>test</h1>
//         <h2>There is no name</h2>
//         </>
//       )} */}
//     </div>
//   );
// }

// export default App;
