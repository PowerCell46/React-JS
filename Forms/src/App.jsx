import UncontrolledForm from './components/UncontrolledForm';
import './App.css'
import ControlledForm from './components/ControlledForm';
import ControlledFormNew from './components/ControlledFormNew';
import { useRef } from 'react';

function App() {
  const formRef = useRef(); 

  return (
    <>
      {/* <UncontrolledForm/> */}
      <ControlledForm formRef={formRef}/>
      {/* <ControlledFormNew/> */}

      <button onClick={() => formRef.current.submit()}>Register</button>
    </>
  )
}

export default App
