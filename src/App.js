import './App.css';



const Person = () => {
  return (
    <>
    <h1>Name: John</h1>
    <h2>Last Name: Doe</h2>
    <h2>Age: 30</h2>
    </>
  )
};

const App = () => {
  // const name = 'Jane';
  // const isNameShowing = true;

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
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
