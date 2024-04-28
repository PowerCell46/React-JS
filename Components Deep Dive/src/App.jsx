import { useEffect, useState } from 'react'
import './App.css'
import styles from "./App.module.css";
import StarWars from './StarWars';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  // const [count, setCount] = useState([1, 2, 3, 4]);
  // const [clicked, setClicked] = useState(count.length);

  // useEffect(() => {
  //   setClicked(() => count.length);
  // }, [count]);
   
  // const onPop = () => {
  //   setCount(prevVal => {
  //     prevVal = prevVal.slice();
  //     prevVal.pop();
  //     return prevVal;
  // });
  // };

  // const onAdd = () => {
  //   setCount(prevArr => {
  //       prevArr = prevArr.slice();
  //       prevArr.length === 0 ? prevArr = [1] : prevArr.push(prevArr[prevArr.length - 1] + 1);
  //       return prevArr;
  //   });
  // }

  return (
    <>
      {/* <h1>Clicked: {clicked} times</h1>
      
      <ul>
        {count.map(e => 
            <li key={e}>{e}</li>
        )}
      </ul>

      <p className={styles.error}>{count.length === 0 ? "Can't remove anymore!" : null}</p>
      <p className={styles.error}>{count.length === 5 ? "Can't add anymore!" : null}</p>

      <button disabled={count.length === 0} onClick={onPop}>Pop</button>
      <button disabled={count.length === 5} onClick={onAdd}>Add</button>
    
    <StarWars/> */}


    <Header/>

    <Main/>

    <Footer/>

    </>
  ) 
}

export default App