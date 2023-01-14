import './App.css';



const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
};

const App = () => {
  // const name = 'Jane';
  // const isNameShowing = true;

  return (
    <div className="App">
      <Person name='John' LastName='Doe' age={25}/>
      <Person name='Marry' LastName='Doe' age={25}/>
      {/* <Person/>
      <Person/>
      <Person/> */}
      {/* <h1>Hello, {2 + 2}</h1> */}
      {/* {name ? (
        <>
        <h1>{name}</h1>
        </>
      ):
      (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )} */}
    </div>
  );
}

export default App;
