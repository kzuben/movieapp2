import React from "react";
import {useEffect,useState} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";


function Hello() {
  useEffect(function(){
      console.log("hi:)"); 
    return function() {
      console.log("bye :("); 
    }},[]);
  return <h1>Hello</h1>
}

function coin() {

 /*  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  const onChange = (event) => {setKeyword(event.target.value)}

  useEffect(() => {
    console.log("I run only once.");
  },[]);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  } , [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  } , [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change")
  },[keyword,counter]);

  const [showing,setShowing] = useState(false);
  const onJustClick = () => {
    setShowing((current) => !current)
  }

 const [toDo, setToDo] = useState("");
 const [toDos, setToDos] = useState([]);
 function onChanges (event) {
  setToDo(event.target.value);
 }

 const onSubmit = (event) => {
  event.preventDefault();
  if(toDo === "") {
    return;
  }
  setToDo("");
  setToDos((currentArray) => [toDo, ...currentArray]);
 };

 console.log(toDos);

 const [loading,setLoading] = useState(true);
 const [coins,setCoins] = useState([]);
 useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {setCoins(json);setLoading(false)});
 },[])
 */
  /* return (
   <div>
    <h1 className={styles.title}>{counter}</h1>
    <input type="text" placeholder="Search here..." value={keyword} onChange={onChange}/>
    <button onClick={onClick}>click me</button>
    <Button text={"Continue"} />
    {showing ? <Hello /> : null}
    <button onClick={onJustClick}>{showing? "HIDE" : "SHOW" }</button>
    <form onSubmit={onSubmit}> 
      <h1>My To Dos ({toDos.length})</h1>
      <input onChange={onChanges} value={toDo} type="text" placeholder="Write your to do..."/>
      <button> Add To Do</button>
    </form>
    <hr />
    <ul>
    {toDos.map((item,index) => (<li key={index}>{item}</li> ))}

    </ul>


    <h1>The Coins! {loading ? "" : `(${coins.length})` }</h1>
    {loading ? <strong>Loading...</strong> : <select>
      {coins.map(
        (coin) => (<option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)
      )}
    </select>}
    
   </div>
  ); */
}

function App() {

  return <Router basename="/movieapp2">
    <Routes>
      <Route path="/movie/:id" element={<Detail />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
   </Router> 
 
}

export default App;
